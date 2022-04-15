<template>
  <ion-card class="profile--mini-card">
    <ion-card-content class="ion-padding-half">
      <ion-row>
        <ion-col size="2">
          <!-- <img src="/images/help.png" alt="" /> -->
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="38" height="38" rx="9" stroke="#BFBFBF" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30ZM18.8545 24.2931C18.8545 23.6604 19.3674 23.1475 20.0001 23.1475C20.6328 23.1475 21.1457 23.6604 21.1457 24.2931C21.1457 24.9258 20.6328 25.4387 20.0001 25.4387C19.3674 25.4387 18.8545 24.9258 18.8545 24.2931ZM20 22.1056C19.3559 22.1056 18.8338 21.5835 18.8338 20.9394V15.7275C18.8338 15.0834 19.3559 14.5613 20 14.5613C20.6441 14.5613 21.1662 15.0834 21.1662 15.7275V20.9394C21.1662 21.5835 20.6441 22.1056 20 22.1056Z" fill="#00B9F2"/>
</svg>

        </ion-col>
        <ion-col>
          <div>
            <p class="ion-text-bold ion-text-black">Help</p>
            <p>Support and Guidance</p>
          </div>
        </ion-col>
        <ion-col size="1">
          <img class="ion-margin-top" src="/images/right-arrow.png" alt="" />
        </ion-col>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
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