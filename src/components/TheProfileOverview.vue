<template>
  <ion-card class="profile__overview">
    <ion-card-content class="ion-margin-top ion-no-padding ion-padding-top">
      <div class="profile__overview--seprator"></div>
      <div class="ion-text-center">
        <div class="container_ion">
    <div class="outer">
        <div class="inner">
           <ion-icon :src="camera" class="camera-icon"></ion-icon>
        </div>
     </div>
  </div>
        <span class=" ion-display-block font Gilroy-Medium"
          >Mathias Stene</span
        >
        <span class="ion-text-muted ion-text-xsmall ion-display-block"
          >Member Since</span
        >
        <span class="ion-text-muted ion-text-xsmall ion-display-block"
          >01.08.2022</span
        >
      </div>
      <div class="">
        <ion-item-divider
          class="ion-divider ion-margin-bottom ion-margin-top"
        ></ion-item-divider>
        <ion-row>
          <ion-col size="6" class="ion-text-center">
            <span
              class="ion-text-xxsmall ion-display-block ion-text-muted ion-font-400 ion-font-family-product"
              >Total Cards Created</span
            >
          </ion-col>
          <ion-col size="6" class="ion-text-center">
            <span
              class="ion-text-xxsmall ion-display-block ion-text-muted ion-font-400 ion-font-family-product"
              >Total Amount</span
            >
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6" class="ion-text-center">
            <img class="" src="/images/card-group.png" alt="" srcset="" />
            <span
              class="ion-margin-left ion-text-black ion-font-400"
              style="margin-left: 6px"
              >06</span
            >
          </ion-col>
          <ion-col size="6" class="ion-text-center">
            <span class="ion-text-primary"
              >Kr <span class="ion-text-black ion-font-400"> 2500</span></span
            >
          </ion-col>
        </ion-row>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent, IonItemDivider } from "@ionic/vue";
import { camera } from 'ionicons/icons';
export default defineComponent({
  components: {
    IonCard,
    IonCardContent,
    IonItemDivider,
  },
  setup() {
    return {

        camera
    };
  },
});
</script>
<style lang="scss">
.profile__overview {
      margin: 25px 25px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(27, 25, 86, 0.1);
  border-radius: 12px;

  &--seprator {
    position: absolute;
    width: 2px;
    height: 76px;
    border: 1px solid #f1f2f9;
    left: 50%;
    top: 216px;
  }
}

.container_ion {
  width: 150px;
  height: 110px;
  display: block;
  margin: 0 auto;
}
.profile-pic {
  width: 150px;
  height: 150px;
}
.outer {
  background-image: url('/public/images/userprofile.svg');
 width: 100% !important;
    height: 100% !important;
    max-width: 100px !important;
    max-height: 100px !important;
    margin: auto;
    background-repeat: no-repeat;
    border-radius: 10%;
    position: relative;
  /* background-size: 150px 150px; */
}
.inner {
     background-color: #FF564C;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: -11px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.70;
}
.camera-icon {
  height: 20px;
  width: 20px;
  color: white;
}
.font.Gilroy-Medium{

  font-family: 'Gilroy-Medium';
font-size: 16px;
line-height: 19px;
font-weight: 600;

text-align: center;

color: #001B5C;
}
.ion-font-family-product{
  font-family: 'Product Sans Regular';
  font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
text-align: center;



}

.ion-font-400{
  font-family: 'Product Sans Regular';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #000000;
}
.ion-text-primary{
   font-family: 'Product Sans Regular';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #00B9F2;
}
</style>
