<template>
  <ion-card class="profile--mini-card">
    <ion-card-content class="ion-padding-half">
      <ion-row>
        <ion-col size="2">
          <!-- <img src="/images/TC.png" alt="" /> -->
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="38" height="38" rx="9" stroke="#BFBFBF" stroke-width="2"/>
<path d="M12 10C17.005 10 21.9876 10 27 10C27 14.9413 27 19.8747 27 24.8551C25.3739 24.8551 23.7553 24.8551 22.1069 24.8551C22.1069 26.5936 22.1069 28.285 22.1069 30C18.728 30 15.3789 30 12 30C12 23.3516 12 16.6954 12 10ZM14.9538 17.6429C18.0119 17.6429 21.0254 17.6429 24.0313 17.6429C24.0313 17.2514 24.0313 16.8833 24.0313 16.5153C20.9881 16.5153 17.9746 16.5153 14.9538 16.5153C14.9538 16.9068 14.9538 17.267 14.9538 17.6429ZM24.0462 19.0211C20.9881 19.0211 17.9746 19.0211 14.9687 19.0211C14.9687 19.4127 14.9687 19.7807 14.9687 20.1488C18.0119 20.1488 21.0254 20.1488 24.0462 20.1488C24.0462 19.7651 24.0462 19.4049 24.0462 19.0211ZM14.9538 22.6547C18.0119 22.6547 21.0179 22.6547 24.0388 22.6547C24.0388 22.2631 24.0388 21.8951 24.0388 21.527C20.9955 21.527 17.9821 21.527 14.9538 21.527C14.9538 21.9107 14.9538 22.2709 14.9538 22.6547ZM17.1318 14.7298C18.728 14.7298 20.3018 14.7298 21.8682 14.7298C21.8682 14.3383 21.8682 13.9859 21.8682 13.6022C20.2795 13.6022 18.7131 13.6022 17.1318 13.6022C17.1318 13.9859 17.1318 14.3461 17.1318 14.7298ZM19.4814 24.8865C18.7131 24.8865 17.9746 24.8865 17.2362 24.8865C17.2362 25.2702 17.2362 25.6304 17.2362 26.0063C17.997 26.0063 18.728 26.0063 19.4814 26.0063C19.4814 25.6304 19.4814 25.2702 19.4814 24.8865ZM16.0801 24.8943C15.6997 24.8943 15.3267 24.8943 14.9612 24.8943C14.9612 25.2858 14.9612 25.6382 14.9612 26.0063C15.3491 26.0063 15.7071 26.0063 16.0801 26.0063C16.0801 25.6226 16.0801 25.2702 16.0801 24.8943Z" fill="#00B9F2"/>
<path d="M26.7911 26.061C25.6125 27.2983 24.4266 28.5434 23.248 29.7729C23.248 28.5826 23.248 27.3375 23.248 26.061C24.4415 26.061 25.6349 26.061 26.7911 26.061Z" fill="#00B9F2"/>
</svg>

        </ion-col>
        <ion-col>
          <div>
            <p class="ion-text-bold ion-text-black">Terms And Conditions</p>
            <p>iGive Terms</p>
          </div>
        </ion-col>
        <ion-col size="1">
          <img class="ion-margin-top" src="/images/right-arrow.png" alt="" />
        </ion-col>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>
<script>
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/vue";
export default {
  components: {
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.ion-text-bold{
  font-family: 'Gilroy-Medium';
    font-size: 16px;
    line-height: 16px;
}

</style>