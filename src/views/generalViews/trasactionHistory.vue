<template>
  <base-layout :showToolbar="true" :showModal="showModal">
    <template #modalContent>
      <div class="ion-grid-center ion-full-height">
        <transaction-success></transaction-success>
      </div>
    </template>
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
                        Trasaction History
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="trasaction">
        <ion-card class="card ion-no-margin" @click="showModal = true">
          <ion-card-content>
            <p class="gilory-bold ion-text-black">Today</p>
            <div class="ion-mt-10">
              <p class="ion-text-12">
                Payment towards Amazon.com for the order number
              </p>
              <p class="ion-text-12 ion-text-color">(123-564687-45455)</p>
            </div>
            <ion-item-divider
              class="ion-divider ion-margin-vertical"
            ></ion-item-divider>
            <div class="">
              <div class="ion-mt-10">
                <p class="ion-text-12">
                  Payment towards Amazon.com for the order number
                </p>
                <p class="ion-text-12 ion-text-color">(123-564687-45455)</p>
              </div>
            </div>
            <ion-item-divider
              class="ion-divider ion-margin-vertical"
            ></ion-item-divider>
            <div class="">
              <div class="ion-mt-10">
                <p class="ion-text-12">
                  Payment towards Amazon.com for the order number
                </p>
                <p class="ion-text-12 ion-text-color">(123-564687-45455)</p>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card class="card ion-no-margin ion-mt-10">
          <ion-card-content>
            <p class="gilory-bold ion-text-black">Yesterday</p>
            <div class="ion-mt-10">
              <p class="ion-text-12">
                Payment towards Amazon.com for the order number
              </p>
              <p class="ion-text-12 ion-text-color">(123-564687-45455)</p>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import TransactionSuccess from "../../components/TransactionSuccess.vue";
import { IonCard, IonCardContent, IonItemDivider } from "@ionic/vue";

export default defineComponent({
  name: "trasaction-history",
  components: {
    IonCard,
    IonCardContent,
    TransactionSuccess,
    IonItemDivider,
  },
  setup() {
    let router = useRouter();

    let showModal = ref(false);
    return { router, showModal };
  },
});
</script>
<style scoped>
.trasaction {
  margin: 25px 20px;
}
.ion-text-color{
  color: #00B9F2;
}
</style>
