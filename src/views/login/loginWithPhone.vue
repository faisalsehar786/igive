<template>
<ion-page>
<ion-content fullscreen scroll-y="true">
<ion-grid class="wave-container">
<ion-row class="ion-padding">
<ion-col size="12" class="ion-margin-vertical">
<router-link to="/login" exact class="cursour_enble">
<!-- @click="router.go(-1)" -->
<div class="ion-text-start">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3229_4160)">
            <path d="M20 10.5025C20 10.9975 19.593 11.4025 19.0955 11.4025H3.07538L7.16834 15.4975C7.53015 15.8575 7.53015 16.42 7.16834 16.78C6.98744 16.96 6.7613 17.05 6.53517 17.05C6.30904 17.05 6.0603 16.96 5.90201 16.78L0.271357 11.155C-0.0904523 10.795 -0.0904523 10.2325 0.271357 9.895L5.90201 4.27C6.26382 3.91 6.82914 3.91 7.19095 4.27C7.55276 4.63 7.55276 5.1925 7.19095 5.5525L3.07538 9.6025H19.0955C19.593 9.6025 20 10.0075 20 10.5025Z" fill="#00B9F2" stroke="#00B9F2" />
        </g>
        <defs>
        <clipPath id="clip0_3229_4160">
        <rect width="20" height="20" fill="white" />
        </clipPath>
        </defs>
    </svg>
</div>
</router-link>
</ion-col>
<ion-col class="ion-align-self-start ion-margin-vertical" size="12">
<div class="ion-text-start signupTitle">
    Logg Inn
</div>
</ion-col>
<ion-col class="ion-align-self-start" size="12">
<div class="ion-text-start signup_text">
  Skriv inn et telefonnummer for å logge på
</div>
</ion-col>
<ion-col class="ion-align-self-start " size="12" style="margin-top: 7%;">
<ion-input placeholder="+47  946 48 359 " class="signup_input ion-margin-top "></ion-input>

</ion-col>
</ion-row>
</ion-grid>
<ion-row class="ion-margin-top ">
<ion-col size="12" class="ion-padding-horizontal-25lf">
<div class="ion-text-center ">
    <router-link to="/login-with-faceId" exact><button class="get_start_button">Neste</button></router-link>
</div>
<div class="ion-text-center ion-margin-vertical">
    <ion-text color="light" class="ion-text-alread-reg">
    ELLER</ion-text>
</div>
<div class="ion-text-center ">
  <button class="get_start_button_back_white"  @click="router.push('/login-with-Phone')">Logg inn med telefonnummer</button>
</div>
<div class="ion-text-center ion-margin-top">
    <ion-text color="light" class="ion-text-alread-reg">Har du ikke en iGive konto? <router-link class="ion-text-alread-reg" to="/register">Opprett her </router-link>
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
name: "Sign-In",
components: {
IonContent,
IonPage,
IonRow,
IonCol,
IonGrid,
IonInput,


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
height: 60vh;

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
.ion-padding-horizontal-25lf{

   padding: 0px 25px;
   margin-bottom: 7%;
   margin-top: 8%;
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
.margin-top-23 {
margin-top: 23px;
}
.margin-bottom-76 {
margin-bottom: 76px;
}
.padding-top-44 {
padding-top: 44px;
}
</style>