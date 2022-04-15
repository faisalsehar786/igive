<template>
  <base-layout :showToolbar="true">
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
                         Contact Us
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
         
    </template>
    <template #content>
      <div class="contact-us">
        <form>
          <div class="ion-item">
            <ion-label class="ion-align-self-center">Select Subject</ion-label>
            <ion-select> </ion-select>
          </div>

          <ion-input class="ion-input ion-mt-10" placeholder="Email" type="text" />
          <ion-textarea
            class="ion-textarea ion-mt-10"
            placeholder="Message"
            type="text"
          ></ion-textarea>
        </form>
      </div>
    </template>
    <template #footer>
      <div class="ion-padding-vertical ion-padding-horizontal ion-margin-horizontal">
        <button class="ion-margin-top btn btn--secondary">Submit</button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "../../layouts/base-layout.vue";
import { useRouter } from "vue-router";
import { IonLabel, IonSelect } from "@ionic/vue";

export default defineComponent({
  name: "contact-us",
  components: {
    BaseLayout,
    IonLabel,
    IonSelect,
  },
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style scoped lang="scss">
.contact-us {
  margin: 25px;
}
.ion-item {
  width: 100%;
  height: 50px;
  background: rgba(239, 242, 246, 0.6);
  mix-blend-mode: normal;
  opacity: 0.8;
  border: 0px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  color: #00000063 !important;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  
    font-weight: 600;
  opacity:2.4;
}
ion-input {
    --background: rgba(239, 242, 246, 0.6);
    ;
    --color: #000000;
    ;
   --placeholder-color: rgb(0 0 0 / 81%);
    ;
    border: 0px solid rgba(0, 0, 0, 0.05);
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


ion-textarea {
    --background: rgba(239, 242, 246, 0.6);
    ;
    --color: #000000;
    ;
    --placeholder-color: rgba(0, 0, 0, 0.5);
      border: 0px solid rgba(0, 0, 0, 0.05);

    width: 100%;
    border-radius: 8px;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    mix-blend-mode: normal;
    margin-top: 11.05px;
    
}
</style>
