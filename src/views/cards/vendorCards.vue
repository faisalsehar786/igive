<template>
  <base-layout :showToolbar="true" :showFooter="true" :auth="false">
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
                        Amazon
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
   
    </template>
    <template #content>

      <div style="padding: 0px 25px;">
      <card-overview
        :cardImage="'/images/amazon-card.png'"
        :cardName="'Amazon.com'"
        :cardUrl="'www.amazon.com'"
      >
      </card-overview>
      <div class="ion-padding-top">
        <h4 class="ion-text-bold ion-text-black">Description</h4>
        <p class=" ion-line-height" style="font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 22px;
/* or 157% */


color: #000000;

opacity: 0.5;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
          deleniti dignissimos cupiditate, dolor nobis amet! Iusto libero nulla
          recusandae cumque. Officiis facere veniam mollitia voluptatem est
          eaque ea quas.
        </p>
      </div>
      </div>
    </template>
    <template #footer>
      <div style="padding: 15px 25px;">
        <button class="btn btn--secondary">Buy Gift Card</button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import CardOverview from "../../components/TheCardOverview.vue";

export default defineComponent({
  name: "vendor-card",
  components: {
    CardOverview,
  },
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style scoped></style>
