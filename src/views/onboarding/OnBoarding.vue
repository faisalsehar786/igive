<template>
<ion-page>
    <ion-content fullscreen scroll-x="false">
        <ion-grid class="wave-container">
            <div class="onboardingBg ion-padding-horizontal ion-padding-top">
                <ion-row>
                    <ion-col size="6" class="ion-margin-vertical">
                        <div class="ion-text-start">
                            <img @click="router.go(-1)" src="/images/arrow-left-white.svg" alt="arrow-back">
                        </div>
                    </ion-col>
                    <ion-col size="6" class="ion-margin-vertical">
                        <div class="ion-text-end">
                            <img @click="router.go(-1)" src="/images/arrow-close-white.svg" alt="arrow-close">
                        </div>
                    </ion-col>
                </ion-row>
                <ion-img :src="`/images/mob-${screen}.png`" class="onboardingSlideIMG"></ion-img>
            </div>
        </ion-grid>
        <ion-row class="onboardingAligmentRow">
            <ion-col size="12" class="ion-padding-horizontal-25lf ion-margin-vertical">
                <div class="ion-text-center ">
                    <div class="ion-padding-block">
                        <img :src="`/images/pagination-${pagination}.png`" alt="" />
                        <div v-if="screen == 1">
                            <h3 class="onboardinH3">Select Vendeor</h3>
                            <p class="text-grey">
                                Select Vendor from the list of vendors<br> available in app.
                            </p>
                        </div>
                        <div v-if="screen == 2">
                            <h3 class="onboardinH3">Gift Card Recepient Details</h3>
                            <p class="text-grey">
                                Enter complete details of gift card recepients in detail.
                            </p>
                        </div>
                        <div v-if="screen == 3">
                            <h3 class="onboardinH3">Topup Cards</h3>
                            <p class="text-grey">
                                Enter gift card balance and make payment via visa card to top up the
                                gift card.
                            </p>
                        </div>
                        <div v-if="screen == 4">
                            <h3 class="onboardinH3">Payment Through Gift Card</h3>
                            <p class="text-grey">
                                You can make payment through the gift cards pending approval from
                                your mobile app.
                            </p>
                        </div>
                        <div v-if="screen == 5">
                            <h3 class="onboardinH3">Payment History</h3>
                            <p class="text-grey">
                                You can always track your from the transactions history.
                            </p>
                        </div>
                        <div v-if="screen == 6">
                            <h3 class="onboardinH3">iGive Wallet</h3>
                            <p class="text-grey">
                                Manage all your gift cards from the igive card wallet.
                            </p>
                        </div>
                    </div>
                    <button class="get_start_button" @click="changeScreen()">Next</button>
                </div>
            </ion-col>
        </ion-row>
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonImg
} from "@ionic/vue";
// import baseLayout from "../../layouts/base-layout.vue";
import {
    defineComponent,
    ref
} from "vue";
import {
    useRouter
} from "vue-router";
export default defineComponent({
    name: 'OnbordingPage',
    components: {
        // baseLayout,
        IonContent,
        IonPage,
        IonRow,
        IonCol,
        IonGrid,
        IonImg
    },
    setup() {
        const router = useRouter();
        let screen = ref(1);
        let pagination = ref(1);
        let totalSteps = ref(6);

        function changeScreen() {
            if (screen.value < totalSteps.value) {
                screen.value += 1;
                pagination.value += 1;
            } else {
                router.push("/wellcome");
            }
        }

        function nextScreen() {
            if (screen.value <= totalSteps.value) {
                screen.value += 1;
            }
        }
        return {
            screen,
            pagination,
            totalSteps,
            changeScreen,
            nextScreen,
            router
        };
    },
});
</script>

<style scoped>
.wave-container {
    background: #00B9F2;
    border-radius: 0px 0px 40px 40px;
}

.onboardingAligmentRow {
    background: white;
    position: relative;
}

.onboardingSlideIMG {
    height: 25rem;
}

ion-grid {
    padding: 0px;
}

.onboardingBg {
    width: 100%;
    height: 30rem;
    background: url('/public/images/onboarding/bgsvg.svg');
    background-size: 100% 100% !important;
    background-position: center center;
    background-repeat: no-repeat;
}

.ion-padding-horizontal-25lf {
    padding: 0px 25px;
}

.onboardinH3 {
    font-family: 'Gilroy-Medium';
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #051F5F;
}

.get_start_button {
    margin-top: 13vh;
    margin-bottom: 2vh;
    font-family: 'Poppins Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* display: flex; */
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 50px;
    text-align: center;
    width: 100%;
    background: #001B5C;
    border-radius: 40px;
}

.text-grey {
    font-family: 'Gilroy-Medium';
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #A0A9B6;
}
</style>
