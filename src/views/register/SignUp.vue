<template>
<ion-page>
    <ion-content fullscreen scroll-y="true">
        <ion-grid class="wave-container">
            <ion-row class="ion-padding">
                <ion-col size="12" class="ion-margin-vertical">
                    <div class="ion-text-start">
                        <img @click="router.go(-1)" src="/images/back-arrow-def-color.svg" alt="back-arrow-def-color">
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start ion-margin-vertical" size="12">
                    <div class="ion-text-start signupTitle">
                        Signup
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                        Vennligst skriv inn gyldig informasjon for å opprette en konto.
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12" style="margin-top: 7%;">
                    <ion-input placeholder="Navn" class="signup_input ion-margin-top "></ion-input>
                    <ion-input placeholder="Epost" class="signup_input ion-margin-top"></ion-input>
                    <ion-input placeholder="Mobilnummer" class="signup_input ion-margin-top"></ion-input>
                    <ion-input placeholder="Passord" class="signup_input ion-margin-top"></ion-input>
                    <ion-input placeholder="Bekreft passord" class="signup_input ion-margin-top"></ion-input>
                    <div class="checkboxCenter signup_input ion-margin-top">
                        <ion-label>
                            <ion-checkbox slot="start" color="dark"></ion-checkbox>
                            <ion-text class="termsCondtext">I have read and accept the <a href="terms-and-conditions"> Terms of Use</a> for giving
                                gift cards. </ion-text>
                        </ion-label>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-row class="ion-margin-top ">
            <ion-col size="12" class="ion-padding-horizontal-25lf">
                <div class="ion-text-center ">
                    <router-link to="/login" exact><button class="get_start_button">Opprett konto</button></router-link>
                </div>
                <div class="ion-text-center ion-margin-top">
                    <ion-text color="light" class="ion-text-alread-reg">Allerede registrert ? <router-link class="ion-text-alread-reg" to="/login">Logg inn her</router-link>
                    </ion-text>
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
    IonInput,
    IonCheckbox,
    IonLabel
} from "@ionic/vue";
import {
    useRouter
} from "vue-router";
export default {
    name: "Sign-up",
    components: {
        IonContent,
        IonPage,
        IonRow,
        IonCol,
        IonGrid,
        IonInput,
        IonCheckbox,
        IonLabel
    },
    data() {
        const router = useRouter();
        return {
            router,
        };
    },
};
</script>

<style scoped>
ion-content {
    --ion-background-color: #001B5C;
}

ion-item {
    --ion-item-background: #FFFFFF;
    --ion-item-border-color: #FFFFFF;
    --background-hover: #FFFFFF;
}

ion-input {
    --background: rgba(239, 242, 246, 0.6);
    ;
    --color: #000000;
    ;
    --placeholder-color: rgba(0, 0, 0, 0.5);
    ;
    --padding-start: 21px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #0000000D;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-top: 11.05px;
}

.wave-container {
    background: #FFFFFF;
    border-radius: 0px 0px 40px 40px;
    width: 100%;
    padding-bottom: 10%;
}

.ion-padding-horizontal-25lf {
    padding: 0px 25px;
    margin-bottom: 7%;
    margin-top: 10%;
}

.signup_text {
    font-family: 'Gilroy Medium';
    font-size: 20px;
    line-height: 22px !important;
    color: #001B5C;
    width: 326px;
}

.signupTitle {
    width: 85px;
    font-family: "Gilroy Bold";
    font-size: 26px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}

.checkboxCenter {
    font-family: 'Gilroy Medium';
    font-size: 11px;
    line-height: 15px;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    width: 254px;
}

ion-checkbox {
    --background: #FFFFFF;
    --checkmark-color: #A7ABB580;
    --background-checked: #FFFFFF;
    --border-radius: 3px;
    --border-color: rgba(167, 171, 181, 0.5);
    --size: 15px;
}

.termsCondtext {
    position: relative;
    left: 9px;
    top: -4px;
}

.get_start_button {
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
    background: #00B9F2;
    border-radius: 40px;
}

.ion-text-alread-reg {
    font-family: "Poppins Medium";
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
}
</style>
