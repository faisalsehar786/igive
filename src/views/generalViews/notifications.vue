<template>
  <base-layout :auth="false" :showToolbar="true">
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
                           Notifications
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="notifications">
        <ion-card class="home__card" @click="router.push('/payment-request')">
          <ion-card-content class="ion-padding-horizontal">
            <ion-row>
              <ion-col size="9" class="ion-padding-unset">
                <p
                  class="gilory-bold ion-text-xsmall ion-text-black ion-no-margin"
                >
                  Payment Request
                </p>
              </ion-col>
              <ion-col
                size="3"
                class="ion-text-end ion-padding-unset ion-text-xxsmall"
              >
                10:53 AM</ion-col
              >
            </ion-row>
            <span class="ion-text-xxsmall"
              >You have received payment request, Please verify that you’re are
              real person.</span
            >
          </ion-card-content>
        </ion-card>
        <ion-card class="home__card" @click="router.push('/payment-request')">
          <ion-card-content class="ion-padding-horizontal">
            <ion-row>
              <ion-col
                size="9"
                class="ion-text-black ion-text-bold ion-padding-unset"
              >
                <span class="gilory-bold ion-text-xsmall ion-text-black">
                  Welcome To iGive</span
                >
              </ion-col>
              <ion-col size="3" class="ion-text-end ion-padding-unset">
                <span class="ion-text-end ion-padding-unset ion-text-xxsmall"
                  >10:53 AM</span
                >
              </ion-col>
            </ion-row>
            <span class="ion-text-xxsmall"
              >Thanks for sign up, click here to give you complete step by step
              tour of the app.</span
            >
          </ion-card-content>
        </ion-card>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import baseLayout from "../../layouts/base-layout.vue";
import { defineComponent } from "vue";
import { IonCard, IonCardContent, IonRow, IonCol, IonGrid } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Notifications-page",
  components: {
    baseLayout,
    IonCard,
    IonCardContent,
    IonRow,
    IonCol,
    IonGrid,
  },
  setup() {
    let router = useRouter();
    return {
      router,
    };
  },
});
</script>
<style scoped>
.notifications {
  margin: 25px 24px;
}
.card-content-ios {
  line-height: unset;
}
</style>
