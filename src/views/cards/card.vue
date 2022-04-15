<template>
<base-layout :showToolbar="true" :auth="false" :showFooter="true">
    <template #toolbar>

        <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">

                <ion-col size="1" class="ion-text-center">

                    <img @click="router.go(-1)" class="navBar--back" src="/images/arrow-back.png" alt="" />

                </ion-col>
                <ion-col size="10" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;
  
white-space: normal;
text-align: center;

color: #000000;">
                        Card Details
                    </ion-title>

                </ion-col>

                <ion-col size="1">
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="fill: #00B9F2;" d="M0.818359 0.315477C1.0384 0.0954319 1.25845 0.0244495 1.49979 0.00315477C1.57077 -0.00394347 1.64176 0.00315477 1.71274 0.00315477C6.93704 0.00315477 12.1613 0.00315477 17.3856 0.00315477C18.4504 0.00315477 19.4086 0.315477 20.2462 0.975613C21.2116 1.74222 21.7937 2.73598 21.9498 3.96397C21.9782 4.21241 21.9995 4.46085 21.9995 4.70219C21.9995 11.0267 21.9995 17.3512 21.9995 23.6758C21.9995 23.839 21.9924 24.0165 21.9498 24.1727C21.7085 25.0244 20.736 25.3084 20.0688 24.7334C19.075 23.8816 18.0813 23.0227 17.0875 22.171C17.0236 22.1142 16.9456 22.0645 16.8675 22.0077C16.4842 22.3342 16.1151 22.6465 15.746 22.966C15.0858 23.5338 14.4328 24.0946 13.7726 24.6624C13.7159 24.705 13.6591 24.7547 13.6023 24.7973C13.1622 25.1238 12.6298 25.1309 12.2039 24.7831C11.7284 24.3998 11.2741 23.9952 10.8056 23.5977C10.1951 23.0724 9.58468 22.5472 8.94584 22.0077C8.7187 22.1993 8.49865 22.3839 8.27861 22.5685C7.41972 23.3067 6.56083 24.052 5.69485 24.776C5.33994 25.0741 4.92114 25.1167 4.49525 24.9322C4.07645 24.7476 3.8706 24.3998 3.81382 23.9597C3.80672 23.8887 3.80672 23.8177 3.80672 23.7468C3.80672 17.3867 3.79962 11.0267 3.81382 4.6667C3.81382 4.00656 3.71444 3.38192 3.44471 2.77857C2.96203 1.69963 2.18122 0.925926 1.10229 0.450344C1.01711 0.407754 0.931931 0.372263 0.818359 0.315477ZM12.8996 6.81037C14.0353 6.81037 15.1639 6.81037 16.2996 6.81037C16.7823 6.81037 17.194 6.51224 17.3431 6.08635C17.4992 5.61786 17.3715 5.14938 16.9881 4.83705C16.7681 4.6525 16.5055 4.59572 16.2215 4.59572C14.0069 4.59572 11.7922 4.59572 9.58468 4.59572C9.535 4.59572 9.47821 4.59572 9.42852 4.59572C8.7329 4.6454 8.26441 5.29844 8.44187 5.97277C8.57673 6.49094 8.98133 6.80327 9.535 6.80327C10.6494 6.81746 11.7709 6.81037 12.8996 6.81037ZM12.8996 11.3461C14.0424 11.3461 15.1852 11.339 16.3209 11.3532C16.7681 11.3603 17.2508 10.9841 17.3715 10.5227C17.485 10.0614 17.2934 9.56448 16.8746 9.30894C16.6474 9.16698 16.399 9.13149 16.1364 9.13149C13.9785 9.13149 11.8206 9.13149 9.65567 9.13149C9.5066 9.13149 9.35754 9.15278 9.20848 9.18118C8.63352 9.31604 8.27151 9.94779 8.42057 10.5227C8.53414 10.9557 9.00263 11.3532 9.49951 11.3461C10.6352 11.3319 11.7638 11.3461 12.8996 11.3461ZM12.8996 15.9103C13.5597 15.9103 14.2269 15.9103 14.8871 15.9103C15.3272 15.9103 15.7743 15.9174 16.2144 15.9103C16.8391 15.9032 17.3005 15.527 17.3927 14.9662C17.4992 14.3132 16.9952 13.7028 16.3209 13.6957C15.4549 13.6886 14.5889 13.6957 13.723 13.6957C12.2962 13.6957 10.8766 13.7028 9.44982 13.6957C9.05941 13.6957 8.56254 14.0364 8.43477 14.4978C8.3141 14.9378 8.48446 15.4276 8.86066 15.6974C9.09491 15.8606 9.35754 15.9174 9.64147 15.9174C10.7204 15.9103 11.8064 15.9103 12.8996 15.9103Z" fill="#7E7FD2"/>
</svg>

                </ion-col>

            </ion-row>
        </ion-grid>

    </template>
    <template #content>
      <div style="padding: 5px 25px;">
        <card-overview :cardImage="'/images/amazon-card.png'" :cardName="'Amazon.com'" :cardNumber="'1234-4575-7654-1278'" :cardAmount="'500'" :cardCvv="'123'" :expirationDate="'12-08-2022'">
        </card-overview>
        <ion-grid class="ion-ion-no-padding">
            <ion-row>
                <ion-col class="ion-padding-vertical">
                    <h4 class="ion-text-small ion-text-bold ion-margin-unset">
                        QR Code
                    </h4>
                    <span class="ion-text-xxsmall">Scan QR Code for Payment.</span>
                </ion-col>
            </ion-row>
        </ion-grid>
        <div class="ion-text-center ion-margin-top">
            <img src="/images/QR.png" alt="" />
        </div>
        <div class="ion-padding-vertical">
            <h4 class="ion-text-small ion-text-bold">Description</h4>
            <p class="ion-line-height">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
                deleniti dignissimos cupiditate, dolor nobis amet! Iusto libero nulla
                recusandae cumque. Officiis facere veniam mollitia voluptatem est
                eaque ea quas.
            </p>
        </div>
      </div>
    </template>
    <template #footer>
      <div style="padding: 15px 25px;">
        <div class="ion-padding-vertical ">
            <button class="ion-margin-top btn__blue">
                Share Gift Card
            </button>
        </div>
         </div>
    </template>
</base-layout>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import CardOverview from "../../components/TheCardOverview.vue";
import {
    useRouter
} from "vue-router";

export default defineComponent({
    name: "single-card",
    components: {
        CardOverview,
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
.container {
    margin: auto;
    /* padding: 1rem !important; */
}

.toolbar>div {
    display: flex;
    justify-content: space-between;
}

.toolbar>div h2 {
    margin: unset;
}

.toolbar {
    --background: unset;
    padding: 1rem;
    display: flex;
}

.card__content {
    padding: unset;
}

.card__content img {
    width: 100%;
}

.ion__card {
    border-radius: 14px;
}

.card__details {
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
}

.font__size {
    font-size: 14px;
}

.card__details h2 {
    font-size: 1.5rem;
    font-weight: bold;
}

.qr__code--text {
    padding-inline: 1rem;
}

.qr__code--text h4 {
    font-weight: bold;
    margin-block: 0.5rem;
}

.qr__code--text span {
    font-size: 12px;
    color: #ccc;
}

.card__des {
    line-height: 20px;
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
.ion-line-height{
  font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 22px;

color: #000000;

opacity: 0.5;
}
.ion-text-xxsmall {
    font-family: 'Gilroy-Medium';
    font-size: 10px;
    line-height: 12px;
    color: #000000;
    opacity: 0.5;
    font-size: 10px;
}
</style>
