<template>
  <base-layout :showToolbar="true" :showModal="showModal" :auth="true">
    <template #modalContent>
      <ion-card>
        <ion-card-content>
          <div class="ion-title ion-text-primary ion-text-center">
            Share via
          </div>
          <span class="ion-text-xsmall ion-text-center"
            >Del gavekortet ditt via alternativene nedenfor</span
          >
          <div class="ion-flex-between ion-padding">
            <img src="/images/social/facebook.png" alt="facebook" />
            <img src="/images/social/twitter.png" alt="twitter" />
            <img src="/images/social/gmail.png" alt="gmail" />
            <img src="/images/social/mail.png" alt="mail" />
            <img src="/images/social/message.png" alt="message" />
          </div>
        </ion-card-content>
      </ion-card>
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
                            Share Gift Card
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="container">
        <ion-card class="promotion__card">
          <ion-card-content class="promotion__card--content">
            <img class="" src="/images/promotion-card.png" alt="" />
            <div class="">
              <div class="ion-text-bold ion-text-medium ion-text-black">
                Amazon.com
              </div>
              <div
                class="margin-top-4 ion-text-black ion-text-xxsmall ion-display-block margin-top-4"
              >
                Expiration Date:
                <span class="ion-text-danger">25-01-2022</span>
              </div>
              <div
                class="margin-top-4 ion-text-black ion-text-xxsmall margin-top-4"
              >
                Code:
                <span class="ion-text-muted">AM2022</span>
              </div>
              <div class="price-btn margin-top-4">Kr. 300</div>
            </div>
          </ion-card-content>
        </ion-card>
        <div class="ion-margin-top ion-margin-bottom">
          <span class="gilory-bold ion-text-bold">Recipient Details</span>
        </div>
        <div class="">


              <ion-input placeholder="Recipient Name" class="signup_input ion-margin-top "></ion-input>
                    <ion-input placeholder="Email" class="signup_input ion-margin-top"></ion-input>

                      <ion-input placeholder="Phone Number" class="signup_input ion-margin-top"></ion-input>
        
            <ion-textarea
              class="ion-textarea ion-mt-10"
              placeholder="Message"
            ></ion-textarea>
       
        </div>
      </div>
    </template>
    <template #footer>
      <div class="ion-padding-vertical ion-padding-horizontal ion-margin-horizontal">
        <button
          class="ion-margin-top btn btn--secondary"
          @click="updateShowModal(true)"
        >
          Share
        </button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonTextarea,
} from "@ionic/vue";
import baseLayout from "../../layouts/base-layout.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    baseLayout,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonTextarea,
  },
  setup() {


     let router = useRouter();
   

    let showModal = ref(false);

    const updateShowModal = (value: boolean) => {
      showModal.value = value;
    };
   
    provide("showModal", { showModal, updateShowModal });
    return {
      updateShowModal,
      showModal,
      router
    };
  },
});
</script>
<style scoped>
.container {
  margin: 25px 20px;
}
.promotion__card {
  margin: unset;
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(27, 25, 86, 0.1);
  border-radius: 10px;
}
.promotion__card--content {
  padding: 13px;
  display: flex;
  flex-wrap: wrap;
}
.promotion__card--content img {
  padding-right: 10px;
}
.promotion__card-text h2 {
  font-size: 20px;
}
.promotion__card-text span {
  color: red;
}
.price-btn {
  width: 60px;
  height: 25px;
  background: #00B9F2;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
}
.margin-top-4 {
  margin-top: 4px;
}

ion-input,ion-textarea {
    --background: rgba(239, 242, 246, 0.6);
    ;
    --color: #000000;
    ;
    --placeholder-color: rgba(0, 0, 0, 0.5);
    ;
    ;
    --padding-start: 21px;
    width: 100%;
    border-radius: 8px;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    mix-blend-mode: normal;
    margin-top: 11.05px;
}
</style>
