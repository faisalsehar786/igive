<template>
  <base-layout
    :showToolbar="true"
    :toolbarBackground="'ion-background-white'"
    :showFooter="true"
  >
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
                           Authentication
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>


      
    </template>
    <template #content>
      <div class="ion-text-center ion-padding-twice">
     <svg width="164" height="331" viewBox="0 0 164 331" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 78.658H1.80717V28.8358C1.80716 25.049 2.5483 21.2993 3.98825 17.8008C5.42819 14.3023 7.53876 11.1235 10.1994 8.44581C12.8601 5.76816 16.0188 3.64414 19.4952 2.195C22.9715 0.745869 26.6975 2.90126e-06 30.4603 0H135.347C139.11 -7.73648e-06 142.836 0.745846 146.312 2.19497C149.788 3.64409 152.947 5.76812 155.608 8.44576C158.268 11.1234 160.379 14.3022 161.819 17.8007C163.259 21.2992 164 25.0489 164 28.8357V302.164C164 305.951 163.259 309.701 161.819 313.199C160.379 316.698 158.268 319.877 155.608 322.554C152.947 325.232 149.788 327.356 146.312 328.805C142.836 330.254 139.11 331 135.347 331H30.4604C22.8611 331 15.5731 327.962 10.1996 322.554C4.82604 317.147 1.80721 309.812 1.80719 302.164V114.122H0V78.658Z" fill="#11AFD4"/>
<path d="M29.5152 8.00002H43.2814C42.6484 9.55351 42.4067 11.239 42.5777 12.908C42.7488 14.5769 43.3273 16.1782 44.2623 17.5707C45.1973 18.9632 46.46 20.1042 47.9394 20.8932C49.4187 21.6821 51.0692 22.0948 52.7454 22.095H113.163C114.839 22.0949 116.49 21.6821 117.969 20.8932C119.448 20.1042 120.711 18.9632 121.646 17.5707C122.581 16.1782 123.16 14.5769 123.331 12.908C123.502 11.239 123.26 9.55349 122.627 8H135.485C141.191 7.99999 146.663 10.2688 150.698 14.3073C154.733 18.3458 157 23.8232 157 29.5345V302.465C157 305.293 156.443 308.094 155.362 310.706C154.281 313.319 152.696 315.693 150.698 317.693C148.701 319.692 146.329 321.279 143.718 322.361C141.108 323.443 138.31 324 135.485 324H29.5152C26.6898 324 23.892 323.443 21.2817 322.361C18.6713 321.279 16.2995 319.692 14.3017 317.693C12.3038 315.693 10.719 313.319 9.63774 310.706C8.5565 308.094 8 305.293 8 302.466V29.5345C8 26.7065 8.5565 23.9063 9.63774 21.2936C10.719 18.6809 12.3038 16.307 14.3017 14.3073C16.2995 12.3076 18.6713 10.7214 21.2817 9.63922C23.892 8.55702 26.6898 8.00002 29.5152 8.00002Z" fill="white"/>
<path d="M105 84H59V95H105V84Z" fill="#11AFD4"/>
<path d="M107 131H57V142H107V131Z" fill="#E5E5E5"/>
<path d="M138 155H27V166H138V155Z" fill="#E5E5E5"/>
<path d="M138 178H27V189H138V178Z" fill="#E5E5E5"/>
<path d="M82 284C99.6731 284 114 269.673 114 252C114 234.327 99.6731 220 82 220C64.3269 220 50 234.327 50 252C50 269.673 64.3269 284 82 284Z" fill="#11AFD4"/>
<path d="M76.0324 263L66 252.961L71.8342 249.43L76.5845 254.183L92.6333 241L98 244.957L76.0324 263Z" fill="white"/>
</svg>

      </div>
      <div class="ion-text-center ion-padding-twice ion-line-height">
        <p class="ion-line-height ion-text-muted">
          There is a Request for the payment from amazon one stop shop would you
          like to go through with the payment your gift card.
        </p>
      </div>
    </template>
    <template #footer>
      <div class="ion-flex-between ion-padding-twice">
        <ion-button class="ion-button-cancel ion-text-white" size="large"
          >No</ion-button
        >
        <ion-button
          @click="router.push('/auth-faceId')"
          class="ion-button"
          size="large"
          color="secondary"
          >Yes</ion-button
        >
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonRow, IonCol, IonGrid, IonButton } from "@ionic/vue";
import BaseLayout from "../../layouts/base-layout.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "payment-request",
  components: {
    BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
    IonButton,
  },
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style scoped>
.ion-button {
  width: 140px;
  height: 50px;
  --border-radius: 36px;
}
.ion-button-cancel {
  width: 140px;
  height: 50px;
  --background: #d0d0d0;
  --border-radius: 36px;
}
</style>
