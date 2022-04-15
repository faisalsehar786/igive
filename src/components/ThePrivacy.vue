<template>
  <ion-card class="profile--mini-card">
    <ion-card-content class="ion-padding-half">
      <ion-row>
        <ion-col size="2">
          <!-- <img src="/images/privacy.png" alt="" /> -->
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="38" height="38" rx="9" stroke="#BFBFBF" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.0765 11.7855C28.5891 11.965 28.9316 12.4483 28.9316 12.9915V20.9368C28.9316 23.1575 28.1245 25.2773 26.6992 26.9196C25.9825 27.7467 25.0757 28.3907 24.1126 28.9116L19.9387 31.1663L15.7578 28.9104C14.7935 28.3895 13.8855 27.7467 13.1676 26.9185C11.7411 25.2761 10.9316 23.1552 10.9316 20.9322V12.9915C10.9316 12.4483 11.2742 11.965 11.7868 11.7855L19.5082 9.07215C19.7827 8.97595 20.0818 8.97595 20.3551 9.07215L28.0765 11.7855Z" fill="#00B9F2"/>
<path d="M16.8823 20.3521L19.1018 22.5727L23.6746 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </ion-col>
        <ion-col>
          <div>
            <p class="ion-text-bold ion-text-black">Privacy</p>
            <p>Privacy Settings</p>
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