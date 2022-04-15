<template>
  <ion-card class="profile--mini-card">
    <ion-card-content class="ion-padding-half">
      <ion-row>
        <ion-col size="2">
          <!-- <img src="/images/profile-icon.png" alt="" /> -->
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="38" height="38" rx="9" stroke="#BFBFBF" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5001 19.4024C23.0965 19.4024 25.2013 17.2976 25.2013 14.7012C25.2013 12.1048 23.0965 10 20.5001 10C17.9037 10 15.7989 12.1048 15.7989 14.7012C15.7989 17.2976 17.9037 19.4024 20.5001 19.4024ZM20.4998 29.8179C15.8055 29.8179 12 28.6519 12 26.2382C12 23.8245 15.8055 21.0773 20.4998 21.0773C25.1941 21.0773 29 23.8245 29 26.2382C29 28.6519 25.1941 29.8179 20.4998 29.8179Z" fill="#00B9F2"/>
</svg>

        </ion-col>
        <ion-col>
          <div>
            <p class="ion-text-bold ion-text-black">Personal Information</p>
            <p>Account Settings</p>
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
