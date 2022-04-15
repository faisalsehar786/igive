<template>
<ion-page>
    <ion-content fullscreen scroll-x="false" scroll-y="true">
        <ion-grid class="wave-container">
            <ion-row class="ion-padding">
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
                <ion-col class="ion-align-self-start  ion-margin-top" size="12">
                  <img src="/images/logo-get-started.svg" alt="">

                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start wellcome_text">
                        Quick and easy way
                        to send a gift card.
                    </div>
                </ion-col>
            </ion-row>

        </ion-grid>

    </ion-content>
    <ion-footer>
        <ion-row>
            <ion-col size="12" class="ion-padding-horizontal-25lf ion-align-items-end">
                <div class="ion-text-center  ion-padding-bottom
                ">
                    <router-link to="/register" exact><button class="get_start_button">Let's Get Started</button></router-link>
                </div>
            </ion-col>

        </ion-row>
    </ion-footer>
</ion-page>
</template>

<script>
import {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid
} from "@ionic/vue";
import {
    useRouter
} from "vue-router";

export default {
    name: "welcomePage",
    components: {
        IonContent,
        IonPage,
        IonRow,
        IonCol,
        IonGrid
    },
    setup() {
        const router = useRouter();
        return {
            router
        }
    },

};
</script>

<style scoped>
.wave-container {

    background: #00B9F2;
    border-radius: 0px 0px 40px 40px;
    width: 100%;
    height: 90%;

}

.ion-padding-horizontal-25lf {

    padding: 0px 25px;
}

.wellcome_text {
    font-family: 'Gilroy Medium';
    margin-top: 40px;
    font-size: 26px;
    line-height: 32px;
    color: #FFFFFF;
    height: 50px;
    width: 255px;
    left: 37px;
    top: 250px;
    border-radius: nullpx;

}

.get_start_button {

    margin-bottom: 7%;
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
</style>
