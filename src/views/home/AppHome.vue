<template>
<base-layout :showToolbar="true" :auth="false">
    <template #toolbar>

        <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">
                <ion-col size="11" class="ion-text-center ion-no-padding">
                    <ion-item lines="none" class="ion-no-padding">
                        <ion-avatar slot="start">
                            <img src="/images/user.svg">
                        </ion-avatar>
                        <ion-label>
                            <div style="font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 16px;
    font-weight: 600;

color: #000000;
">Hi Mathis</div>
                            <div style="font-family: 'Gilroy-Medium';
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: -0.5px;
font-weight:600;
color: #575858;

opacity: 0.5;">Have a Good Day</div>

                        </ion-label>

                    </ion-item>

                </ion-col>

                <ion-col size="1" class="ion-text-center ion-align-self-center">

                <svg width="30" height="30" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 17.25V15C13.75 12.1005 11.3995 9.75 8.5 9.75C5.60051 9.75 3.25 12.1005 3.25 15V17.25C3.25 19.725 1 20.325 1 21.75C1 23.025 3.925 24 8.5 24C13.075 24 16 23.025 16 21.75C16 20.325 13.75 19.725 13.75 17.25Z" stroke="#11AFD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.50014 25.5C7.74189 25.5 7.02939 25.4745 6.35889 25.425C6.65226 26.3609 7.51939 26.9978 8.50014 26.9978C9.48088 26.9978 10.348 26.3609 10.6414 25.425C9.97089 25.4745 9.25839 25.5 8.50014 25.5Z" fill="#11AFD4"/>
<path d="M12.3062 12V11.468L14.0352 9.704C14.4972 9.242 14.7282 8.84533 14.7282 8.514C14.7282 8.23867 14.6442 8.024 14.4762 7.87C14.3082 7.716 14.1029 7.639 13.8602 7.639C13.3982 7.639 13.0622 7.85833 12.8522 8.297L12.3062 7.975C12.4602 7.65767 12.6725 7.41733 12.9432 7.254C13.2185 7.09067 13.5219 7.009 13.8532 7.009C14.2639 7.009 14.6209 7.14433 14.9242 7.415C15.2275 7.68567 15.3792 8.04967 15.3792 8.507C15.3792 9.00167 15.0875 9.54067 14.5042 10.124L13.2512 11.37H15.4702V12H12.3062Z" fill="white"/>
</svg>


                </ion-col>

            </ion-row>
        </ion-grid>

    </template>
    <template #content>
        <div class="home">
            <div class="ion-flex-between">
                <h5 class="ion-no-margin" style="font-family: 'Gilroy-Medium';
font-size: 16px;
line-height: 22px;

font-weight: 600;
color: #000000;">
                    Recently Used
                </h5>
                <span class="ion-text-muted ion-text-xsmall ion-text-12">See All</span>
            </div>
            <div class="ion-margin-top">
                <img class="" src="/images/rUsedCard.svg" alt="" />
            </div>
            <div class="ion-flex-between">
                <div class="ion-margin-bottom" style="font-family: 'Gilroy-Medium';
font-size: 16px;
line-height: 22px;
    font-weight: 600;
color: #000000;">
                    Relevant Promotions
                </div>
                <span class="ion-text-muted ion-text-xsmall ion-text-12">See All</span>
            </div>
            <cardComponent class="home__card" v-for="(card, index) in cards" :key="index" cardImage="/images/promotion-card.png" storeUrl="www.amazon.com" storeName="Amazon.com" expirationDate="25-01-2022">
            </cardComponent>
        </div>
    </template>
</base-layout>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from "vue";
import baseLayout from "../../layouts/base-layout.vue";
import cardComponent from "../../components/cardComponent.vue";
import {
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar
} from "@ionic/vue";

export default defineComponent({
    // name: "home-page",
    components: {
        IonGrid,
        IonRow,
        IonCol,
        baseLayout,
        IonAvatar,
        cardComponent,
    },
    setup() {
        let cards = ref([1, 2, 3, 4, 5, 6, 7]);
        return {
            cards,
        };
    },
});
</script>

<style scoped>
.padding--top-6 {
    padding-top: 6px;
}

.ion-text-12 {
    font-family: 'Gilroy-Medium';
    font-size: 12px !important;
    line-height: 22px;
    color: #000000;
    opacity: 0.5;
}

ion-avatar {
    --border-radius: 40%;
    width: 48px;
    height: 48px;
}
.home{
  padding: 15px 25px;
}
</style>
