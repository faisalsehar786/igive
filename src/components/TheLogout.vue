<template>
  <ion-card class="profile--mini-card">
    <ion-card-content class="ion-padding-half">
      <ion-row>
        <ion-col size="2">
          <!-- <img src="/images/logout.png" alt="" /> -->
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="38" height="38" rx="9" stroke="#BFBFBF" stroke-width="2"/>
<path d="M17.5555 11.0186C17.5555 12.7531 17.5555 14.4722 17.5555 16.199C17.5555 16.4293 17.5709 16.6595 17.6169 16.8821C17.8855 18.1177 19.0444 18.9543 20.2724 18.8161C21.5234 18.6703 22.4597 17.6265 22.4597 16.3602C22.4674 14.7255 22.4597 13.0831 22.4597 11.4483C22.4597 11.3102 22.4597 11.1721 22.4597 11.0262C25.5603 11.7323 29.39 15.1476 28.9679 20.4202C28.5995 24.9713 24.9003 28.4634 20.3491 28.6399C15.5831 28.8241 11.4848 25.3167 11.0396 20.5046C10.5791 15.3625 14.217 11.8244 17.5555 11.0186Z" fill="#00B9F2"/>
<path d="M20.8481 13.0983C20.8481 14.1575 20.8558 15.2166 20.8481 16.2757C20.8404 16.9664 20.2648 17.3732 19.6892 17.1199C19.3515 16.9664 19.1903 16.6825 19.1903 16.3294C19.1827 14.1728 19.1827 12.0085 19.1903 9.8519C19.1903 9.33769 19.5587 9 20.0346 9C20.5027 9.00767 20.8481 9.35304 20.8481 9.87493C20.8558 10.9494 20.8481 12.0239 20.8481 13.0983Z" fill="#00B9F2"/>
</svg>

        </ion-col>
        <ion-col>
          <div>
            <p class="ion-text-bold ion-text-black">Logout</p>
            <p>Leaving so Soon</p>
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