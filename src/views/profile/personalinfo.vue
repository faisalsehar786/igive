<template>
  <base-layout :show-toolbar="true">
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
                        Personlig Informasjon
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="personal-info">
        <div class="ion-text-center picture__container">
          <img src="/images/philip.png" alt="profile-picture" />
          <img
            v-if="edit"
            class="picture__container--camera"
            src="/images/camera.png"
            alt="camera"
          />
        </div>
        <form class="margin-top-30">

                <div class="ion-input-mask">
               <ion-label class="ion-label-text">Navn</ion-label>
              <ion-input placeholder="Navn" class="signup_input ion-margin-top "   v-model="address"
            :disabled="!edit"></ion-input>
           </div>

<div class="ion-input-mask">
 <ion-label class="ion-label-text">Epost</ion-label>
                    <ion-input placeholder="Epost" class="signup_input ion-margin-top"   v-model="address"
            :disabled="!edit"></ion-input>
</div>

<div class="ion-input-mask">
 <ion-label class="ion-label-text">Telefonnummer</ion-label>
        <ion-input placeholder="+47 47 47 47" class="signup_input ion-margin-top"  
            type="tel"
           
            v-model="number"
            :disabled="!edit"></ion-input>
</div>
            <div class="ion-input-mask">
 <ion-label class="ion-label-text">Adresse</ion-label>
              <ion-input placeholder="Adresse" class="signup_input ion-margin-top "   v-model="address"
            :disabled="!edit"></ion-input>
                   
        </div>
        </form>


        <div class="ion-padding-vertical ">
        <button
          v-if="!edit"
          class="ion-margin-top btn btn--success"
          @click="edit = true"
        >
          Edit Profile
        </button>
        <button
          v-else
          class="ion-margin-top btn btn--secondary"
          @click="edit = false"
        >
          Lagre endringer
        </button>
      </div>
      </div>
    </template>
    <!-- <template #footer>
      
    </template> -->
  </base-layout>
</template>
<script lang="ts">
import BaseLayout from "../../layouts/base-layout.vue";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "personal-info",
  components: {
    BaseLayout,
  },
  setup() {
    let router = useRouter();
    let edit = ref(false);
    let name = ref("");
    let email = ref("");
    let number = ref("");
    let address = ref("");

    return {
      router,
      edit,
      name,
      email,
      number,
      address,
    };
  },
});
</script>
<style scoped lang="scss">
.personal-info {
  margin: 25px;
}
.picture__container {
  height: 125px;
  width: 125px;
  border: 2.5px solid #ececec;
  border-radius: 50%;
  margin: auto;
  background-color: #9ad9ec;
  position: relative;

  &--camera {
    position: absolute;
    top: 90px;
    left: 90px;
  }
}
.margin-top-30 {
  margin-top: 30px;
}

ion-input {

 
  
    --color: #000000;
    ;
    --placeholder-color: rgb(0, 0, 0);
    ;
   
  
  
  
    font-family: "Gilroy Medium";
    font-size: 14px;

    font-weight: 400;
   margin-top:0px !important;
    margin-bottom:0px !important;
    opacity: 5.2;

}
.ion-label-text{
font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 16px;
font-weight: 600;

  
color: #001B5C;
}

.ion-input-mask{
    background: rgba(0, 0, 0, 0.02);
    --color: #000000;
    height: 66px;
    padding: 10px 15px;
  border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 12px;
    margin-top: 11px;
    border: 1px solid #0000000D;
}
.svgeyepostion{
  float: right;
    position: relative;
    top: 14px;
}
</style>
