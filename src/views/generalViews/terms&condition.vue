<template>
  <base-layout :auth="false" :showToolbar="true" :showFooter="true">
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
                         Terms And Conditions
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    
    </template>
    <template #content>
      <div   style="padding: 24px 25px;">
        <div class="ion-text-primary ion-text-medium">iGive Terms of Use</div>
        <div class="line-height text-color-muted ion-mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </div>
        <div class="line-height text-color-muted ion-mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </div>
      </div>
    </template>
    <template #footer>
      <div  style="padding: 24px 25px;">
        <button class="ion-margin-top btn__blue">
          Continue Reading
        </button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import baseLayout from "../../layouts/base-layout.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "terms-&-condtion",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    baseLayout,
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
.text-color-muted {
  font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 22px;
/* or 157% */


color: #000000;

opacity: 0.5;
}
.line-height {
  line-height: 28px;
}
.ion--margin {
  margin: 23px 25px;
}
.ion-text-medium{
font-family: 'Gilroy-Medium';
font-size: 16px;
line-height: 22px;
color: #5456B7;
}
.btn__blue {
 
    width: 100%;
    height: 3rem;
    color: white;
   background: #00B9F2;
border-radius: 62px;

    font-family: Poppins;
font-size: 15px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: center;

}

</style>
