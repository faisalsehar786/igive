<template>
  <ion-card class="profile--mini-card">
    <ion-card-content class="ion-padding-half">
      <ion-row>
        <ion-col size="2">
          <!-- <img src="/images/receipts.png" alt="" /> -->
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="38" height="38" rx="9" stroke="#BFBFBF" stroke-width="2"/>
<g clip-path="url(#clip0_4014_4800)">
<path d="M17.8742 12.3933C17.8742 13.1492 17.8742 13.8968 17.8742 14.6938C16.5796 14.6938 15.335 14.6938 14.0738 14.6938C14.0738 15.195 14.0738 15.6386 14.0738 16.148C14.2826 16.148 14.4998 16.148 14.7169 16.148C15.8028 16.148 16.8886 16.1398 17.9745 16.1562C18.0998 16.1562 18.2752 16.222 18.342 16.3123C18.8599 17.0518 19.3527 17.7994 19.8455 18.5389C17.9995 18.5389 16.0534 18.5389 14.0738 18.5389C14.0738 19.0482 14.0738 19.5083 14.0738 19.9849C16.3624 19.9849 18.6343 19.9849 20.9564 19.9849C20.9564 19.7384 20.9564 19.5001 20.9564 19.3029C21.9671 19.5823 22.9527 19.8534 23.9884 20.1328C23.9884 23.3452 23.9884 26.6562 23.9884 29.9919C19.6617 29.9919 15.3434 29.9919 11 29.9919C11 24.1339 11 18.2842 11 12.3933C13.3137 12.3933 15.6274 12.3933 17.8742 12.3933ZM14.0654 23.7806C16.3791 23.7806 18.6594 23.7806 20.9564 23.7806C20.9564 23.3123 20.9564 22.8687 20.9564 22.4168C18.651 22.4168 16.3624 22.4168 14.0654 22.4168C14.0654 22.8769 14.0654 23.3123 14.0654 23.7806ZM14.0654 27.6421C16.3791 27.6421 18.6594 27.6421 20.948 27.6421C20.948 27.1738 20.948 26.7302 20.948 26.2783C18.6427 26.2783 16.3541 26.2783 14.0654 26.2783C14.0654 26.7384 14.0654 27.1738 14.0654 27.6421Z" fill="#00B9F2"/>
<path d="M24.1219 18.5552C21.4407 18.547 19.269 16.4108 19.269 13.7817C19.269 11.1362 21.4574 8.99181 24.1637 9.00002C26.8199 9.00824 29.0166 11.1855 28.9999 13.7981C28.9832 16.4273 26.7948 18.5552 24.1219 18.5552ZM26.0347 15.5399C26.2686 15.0881 26.469 14.6773 26.6946 14.25C26.1433 13.9707 25.6171 13.7242 25.1159 13.4449C24.9906 13.3791 24.8737 13.1902 24.8653 13.0505C24.8403 12.3439 24.857 11.6291 24.857 10.9226C24.857 10.6104 24.857 10.3064 24.857 10.0024C24.3391 10.0024 23.8964 10.0024 23.412 10.0024C23.412 11.3169 23.4036 12.5986 23.4287 13.8803C23.4287 14.0528 23.579 14.2911 23.7377 14.3733C24.4811 14.7758 25.2496 15.1373 26.0347 15.5399Z" fill="#00B9F2"/>
</g>
<defs>
<clipPath id="clip0_4014_4800">
<rect width="18" height="21" fill="white" transform="translate(11 9)"/>
</clipPath>
</defs>
</svg>

        </ion-col>
        <ion-col>
          <div>
            <p class="ion-text-bold ion-text-black">Receipts</p>
            <p>Complete History Of All Receipts</p>
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