<template>
  <base-layout
    :contentClass="'blue-background'"
    :footerPadding="'ion-padding-twice'"
  >
  
    <template #content>
      <div class="loginOptions">


            <ion-col class="ion-align-self-start ion-margin-vertical" size="12">
                    <div  class="ion-text-start signupTitle">
                     Enkel innlogging
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                 Aktiver enklere innlogging med ansiktsgjenkjenning eller
            fingeravtrykk
                    </div>
                  
                </ion-col>
       
        <div class="loginOptions__Images">
          <img
            :src="`/images/icons/face-${viaMobile ? 1 : 2}.png`"
            alt=""
            @click="viaMobile = true"
          />
          <img
            @click="viaMobile = false"
            :src="`/images/icons/touch-${viaMobile ? 1 : 2}.png`"
            alt=""
          />
        </div>
      </div>
    </template>
    <template #footer>
      <div style="padding:24px 25px;">
      <button

        class="get_start_button "
        @click="router.push('/login/touch')"
      >
        Slå på
      </button>
      <div class="loginOptions__footer--text">
        <span>Hopp over</span>
      </div>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import baseLayout from "../../layouts/base-layout.vue";

export default defineComponent({
  name: "login-with-touch-or-faceId",
  components: {
    baseLayout,
  },
  setup() {
    let router = useRouter();

    let viaMobile = ref(true);

    function changeToEmail() {
      viaMobile.value = false;
    }
    return { viaMobile, changeToEmail, router };
  },
});
</script>
<style scoped>
.loginOptions{

  padding: 100px 25px;
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



</style>
