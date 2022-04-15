<template>
  <base-layout
    :contentClass="'blue-background'"
    :footerPadding="'ion-padding-twice'"
  >
    <template #content>
        <ion-row class="ion-padding">
                <ion-col size="12" class="ion-margin-vertical">
                    <div class="ion-text-start">
                        <img @click="router.go(-1)" src="/images/back-arrow-def-color.svg" alt="back-arrow-def-color">
                    </div>
                </ion-col>
        </ion-row>
      <div class="pinCode">
         
           <ion-col class="ion-align-self-start ion-margin-vertical" size="12">
                    <div class="ion-text-start signupTitle">
                        Logg Inn
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                     Logg inn med personlig kode
                    </div>
                </ion-col>
       
        <form class="ion-margin-top">
          <input
            class="ion-input ion-margin-top"
            v-model="value"
            type="password"
          />
        </form>
      </div>
    </template>
    <template #footer>

      <div style="padding:25px 25px;">
      <button class="ion-margin-top get_start_button">Neste</button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import baseLayout from "../../layouts/base-layout.vue";
import {
    useRouter
} from "vue-router";
export default defineComponent({
  name: "signIn-with-code",
  components: {
    baseLayout,
  },
  setup() {

    const router = useRouter();
    let value = ref("");
    return { value ,router};
  },
});
</script>
<style scoped>
.pinCode{

  padding: 100px 25px;
}
ion-footer{
   padding: 10px 25px;
}
.signupTitle {
    font-family: "Gilroy Bold";
    font-size: 26px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
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

ion-input {
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
