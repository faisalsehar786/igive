<template>
  <base-layout :showToolbar="true" :auth="false">
    <template #toolbar>
    

         
            <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">

                <ion-col size="1" class="ion-text-center">

                 <img
              @click="router.go(-1)"
              class="navBar--back"
              src="/images/arrow-back.png"
              alt=""
            />

                </ion-col>
                <ion-col size="11" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;

white-space: normal;
text-align: center;

color: #000000;">
                      Campaigns List
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="campaigns">
        <cardComponent
          class="home__card"
          v-for="(card, index) in cards"
          :key="index"
          cardImage="/images/promotion-card.png"
          storeUrl="www.amazon.com"
          storeName="Amazon.com"
          expirationDate="25-01-2022"
        >
        </cardComponent>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CardComponent from "../../components/cardComponent.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    CardComponent,
  },
  setup() {
    let cards = ref([1, 2, 3, 4, 5, 6, 7]);
    let router=useRouter();
    return { cards,router };
  },
});
</script>
<style lang="scss" scoped>
.campaigns {
  margin: 25px;
}
</style>
