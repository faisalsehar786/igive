<template>
  <base-layout :showToolbar="true" :pageBackground="'ion-background-primary'">
    <template #toolbar>
      <ion-grid>
        <ion-row >
          <ion-col size="12" class="ion-margin-iconback">
                    <router-link to="/register" exact class="cursour_enble">
                        <!-- @click="router.go(-1)" -->
                        <div class="ion-text-start">
                        <img @click="router.go(-1)" src="/images/back-arrow-def-color.svg" alt="back-arrow-def-color">
                        </div>
                    </router-link>
                </ion-col>
        </ion-row>
      </ion-grid>
    </template>
    <template #content>
      <div class="password">
          <ion-row>
          <ion-col class="ion-align-self-start ion-margin-vertical" size="12">
                    <div class="ion-text-start signupTitle">
                       Glemt passord
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                     Velg hvilken kontaktdetalj skal vi bruke for å tilbakestille passordet
          ditt?
                    </div>
                </ion-col>
                  </ion-row>
        

          <ion-row class="ion-margin-vertical">
             <ion-col class="ion-margin-top ion-no-padding">
          <img
            :src="`/images/icons/sms-${viaMobile ? 1 : 2}.svg`"
            alt=""
            @click="viaMobile = true"
          />
          </ion-col>
          <ion-col class="ion-margin-top ion-no-padding">
          <img
            @click="viaMobile = false"
            :src="`/images/icons/email-${viaMobile ? 1 : 2}.svg`"
            alt=""
          />
          </ion-col>
      </ion-row>
      </div>
    </template>
    <template #footer>
      <div class="ion-padding-vertical ion-padding-horizontal">
        <button
          class="get_start_button"
          @click="navigationToOtp"  
        >
          Slå på
        </button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import baseLayout from "../../layouts/base-layout.vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";

export default defineComponent({
  name: "forget-password",
  components: {
    baseLayout,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    let viaMobile = ref(true);

    let router = useRouter();

    let title = ref("Bekreftelse");

    let subTitle = ref(
      "Skriv inn bekreftelseskoden vi nettopp sendte deg på telefonnummeret ditt."
    );

    const navigationToOtp = () => {
      if (!viaMobile.value) {
        subTitle.value =
          "Skriv inn bekreftelseskoden vi nettopp sendte deg tile-postadressen din.";
      }
      router.push({
        name: "password-otp",
        params: {
          title: title.value,
          subTitle: subTitle.value,
        },
      });
    };

    function changeToEmail() {
      viaMobile.value = false;
    }
    return {
      router,
      viaMobile,
      title,
      subTitle,
      changeToEmail,
      navigationToOtp,
    };
  },
});
</script>
<style scoped>
.padding-top-44 {
  padding-top: 44px;
}
.margin-top-35 {
  margin-top: 35px;
}

.signup_text {
    font-family: 'Gilroy Medium';
    font-size: 20px;
    line-height: 22px !important;
    color: #001B5C;
    width: 326px;
}

.signupTitle {
    font-family: "Gilroy Bold";
    font-size: 26px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}
.password{
  margin-top: -9px;
}
.get_start_button {
    font-family: 'Poppins Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* display: flex; */
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 50px;
    text-align: center;
    width: 100%;
    background: #00B9F2;
    border-radius: 40px;
}
.ion-margin-iconback{
  margin: 25px;
}
.password{

  height: 70vh;
}
</style>
