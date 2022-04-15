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
                        Logg Inn
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                        Vi sendte en OTP-kode for å bekrefte nummeret ditt
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start ion-login-margin" size="12" >
                    <ion-input placeholder="+47  946 48 359 " class="signup_input ion-margin-top "></ion-input>

                    <div class="otp-input-wrapper">
                        <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="4" :input-type="'password'" :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete">
                        </v-otp-input>
                    </div>

                    <ion-item class="ion-margin-top ion-item-back-controll">
                        <ion-label>Aktiver Face ID/Touch ID</ion-label>
                        <ion-toggle class="ion-toggle-height" color="primary" v-model="switchState" @ionChange="updateShowModal">
                        </ion-toggle>
                    </ion-item>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-row class="ion-margin-top ">
            <ion-col size="12" class="ion-padding-horizontal-25lf ">
                <div class="ion-text-center ">
                    <router-link to="/login-with-faceId" exact><button class="get_start_button">Logg inn</button></router-link>
                </div>
                <div class="ion-text-center ion-margin-vertical">
                    <ion-text color="light" class="ion-text-alread-reg">
                        ELLER</ion-text>
                </div>
                <div class="ion-text-center ">
                    <button class="get_start_button_back_white" @click="router.push('/login-with-Phone')">Logg inn med telefonnummer</button>
                </div>
                <div class="ion-text-center ion-margin-top">
                    <ion-text color="light" class="ion-text-alread-reg">Har du ikke en iGive konto? <router-link class="ion-text-alread-reg" to="/register">Opprett her </router-link>
                    </ion-text>
                </div>
            </ion-col>
        </ion-row>
    </ion-content>
    <div class="backdrop" v-if="showModal">
        <div class="ion-align-items-center ion-flex ion-full-height py-1" >
            <app-success v-if="false" :success="false"></app-success>
            <ion-card class="ion-padding-bottom" style="border-radius: 15px;">
                <ion-card-content class="ion-padding">
                    <div class="ion-title ion-text-primary ion-text-center ion-text-custom-font-erdu" >
                        Er du sikker?
                    </div>
                    <div class="ion-text-center ion-text-custom-font-vil" >
                        <span class="ion-text-small ion-line-height">
                            Du vil aktivere Face ID eller Touch ID for neste pålogging
                        </span>
                    </div>
                    <div class="ion-flex-between ion-padding-top">
                        <ion-button @click="updateShowModal(false)" class="ion-button-cancel ion-text-white" size="large">No</ion-button>
                        <ion-button @click="updateShowModal(true)" class="ion-button" size="large" color="secondary">Yes</ion-button>
                    </div>
                </ion-card-content>
            </ion-card>
        </div>
    </div>
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
    IonLabel,
    IonItem,
    IonToggle,
    IonText,
    IonCard,
    IonCardContent,
    IonButton,
} from "@ionic/vue";
import {
    useRouter
} from "vue-router";
import {
    defineComponent,
    provide,
    ref
} from "vue";
export default defineComponent({
    name: "login-otp",
    components: {
        IonContent,
        IonPage,
        IonRow,
        IonCol,
        IonGrid,
        IonInput,
        IonLabel,
        IonItem,
        IonToggle,
        IonText,
        IonCard,
        IonCardContent,
        IonButton,
    },
    setup() {
        const router = useRouter();
        let switchState = ref(false);
        let showModal = ref(false);
        const updateShowModal = (e) => {
            showModal.value = switchState.value;
            console.log(e)
            if (e === true) {
                showModal.value = false;
            }
            if (e == false) {
                showModal.value = false;
                switchState.value = false;
            }
        };
        const nextRoute = () => {
            router.push("/login-with-faceId");
        };
        provide("showModal", {
            showModal,
            updateShowModal
        });
        return {
            router,
            updateShowModal,
            switchState,
            showModal,
            nextRoute,
        };
    },
});
</script>

<style scoped>
.ion-item-back-controll {
    --ion-item-background: rgba(248, 248, 248, 0.5);
    ;
    --ion-item-border-color: #0000000D;
    --background-hover: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #0000000D;
    font-family: 'Gilroy Medium';
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    opacity: 0.5;
    margin-top:10%;
}

ion-content {
    --ion-background-color: #001B5C;
}

.forgetpassText {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
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
    ;
    --padding-start: 21px;
    width: 100%;
    border-radius: 8px;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    mix-blend-mode: normal;
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
    margin-top: 8%;
}

.signup_text {
    font-family: 'Gilroy Medium';
    font-size: 20px;
    line-height: 22px !important;
    color: #001B5C;
    width: 326px;
}

.signupTitle {
    font-family: "Gilroy Bold";
    font-size: 26px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}
.ion-login-margin{

    margin-top:7%
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
.ion-text-custom-font-erdu{


         font-family: Gilroy-Medium;
        font-size: 24px;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        margin: 12px;
        color: #051F5F;
    

}

.ion-text-custom-font-vil{


         font-family: Gilroy-Medium;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: #777777;
       
        border-radius: nullpx;
    


}
.get_start_button_back_white {
    font-family: 'Poppins Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* display: flex; */
    align-items: center;
    text-align: center;
    color: #001B5C;
    height: 50px;
    text-align: center;
    width: 100%;
    background: #ffff;
    border-radius: 40px;
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
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: none;
}

.forgot-Pass-text {
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #009CCE;
}

.login_check_button_active {
    --background: #EFF2F699;
    ;
    --color: var(--ion-background-color);
    --placeholder-color: var(--ion-background-color);
    --padding-start: 21px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #0000000D;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
}

.ion-button {
    width: 100px;
    height: 40px;
    --border-radius: 36px;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;

}

.ion-button-cancel {
    width: 100px;
    height: 40px;
    --background: #d0d0d0;
    --border-radius: 36px;

    font-family: Poppins;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;

}

.margin-top-23 {
    margin-top: 23px;
}

.margin-bottom-76 {
    margin-bottom: 76px;
}

.padding-top-44 {
    padding-top: 44px;
}

.otp-input-wrapper {

    background: rgba(239, 242, 246, 0.6);
    color: #000000;
    height: 42px;
    border: none;
    width: 100%;
    border-radius: 8px;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    mix-blend-mode: normal;
    margin-top: 11.05px;
}
.py-1{
padding: 0px 1rem;
}
</style>
