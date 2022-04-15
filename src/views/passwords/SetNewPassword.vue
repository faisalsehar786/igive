<template>
<base-layout :showFooter="true" :showToolbar="true" :pageBackground="'ion-background-primary'">
    <template #toolbar>
        <ion-grid>
            <ion-row>
                <ion-col size="12" class="ion-margin-iconback">
                    <div class="ion-text-start">
                        <img @click="router.go(-1)" src="/images/back-arrow-def-color.svg" alt="back-arrow-def-color">
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </template>
    <template #content>
        <div class="newPassword">
            <ion-row>
                <ion-col class="ion-align-self-start ion-margin-vertical" size="12">
                    <div class="ion-text-start signupTitle">
                        Opprett nytt passord
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                        Identiteten din er bekreftet! Angi ditt nye passord.
                    </div>
                </ion-col>
            </ion-row>

            <form class="margin-top-65">

                <ion-input type="password" placeholder="Passord" class="signup_input ion-margin-top "></ion-input>

                <ion-input type="password" placeholder="bekreft passord" class="signup_input ion-margin-top "></ion-input>

            </form>
        </div>
    </template>
    <template #footer>
        <div class="ion-padding-vertical ion-padding-horizontal">
            <button class="ion-margin-top get_start_button ion-margin-bottom" @click="router.push('/login')">
                Oppdater
            </button>
        </div>
    </template>
</base-layout>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from "vue";
import {
    useRouter
} from "vue-router";
import {
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/vue";
export default defineComponent({
    name: "new-password",
    components: {
        IonGrid,
        IonRow,
        IonCol,
    },
    setup() {
        let router = useRouter();
        let value = ref(". . . .");
        return {
            value,
            router
        };
    },
});
</script>

<style scoped>
.padding-top-44 {
    padding-top: 44px;
}

.margin-top-65 {
    margin-top: 65px;
}

.margin-bottom {
    margin-bottom: 227px;
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

.newPassword {
    margin-top: -9px;
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

.ion-margin-iconback {
    margin: 25px;
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

.newPassword {
    height: 70vh;
}
</style>
