<template>
<base-layout :showToolbar="true">
    <template #toolbar>
        <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">

                <ion-col size="1" class="ion-text-center">

                    <img @click="router.go(-1)" class="navBar--back" src="/images/arrow-back.png" alt="" />

                </ion-col>
                <ion-col size="11" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;

white-space: normal;
text-align: center;

color: #000000;">
                        Privacy
                    </ion-title>

                </ion-col>

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
        <ion-card class="privacy--card">
            <ion-card-content class="ion-no-padding">
                <ion-row>
                    <ion-col size="10" class="">
                        <p class="ion-line-height" style="font-family: Gilroy-Medium;
    font-size: 14px;
    line-height: 22px;
    opacity: 0.5;">
                            Permission to send you gift cards with balance, as well as other
                            benefits from all the providers in the app
                        </p>

                    </ion-col>
                    <ion-col size="2">
                        <ion-toggle color="primary" class="ion--toggle"></ion-toggle>
                    </ion-col>
                </ion-row>
            </ion-card-content>
        </ion-card>
        <ion-card class="privacy--card">
            <ion-card-content class="ion-no-padding">
                <ion-row>
                    <ion-col size="10" class="">
                        <p class="ion-line-height" style="
                font-family: Gilroy-Medium;
    font-size: 14px;
    line-height: 22px;
    opacity: 0.5;">
                            Permission to send you gift cards with balance, as well as other
                            benefits from all the providers in the app
                        </p>
                    </ion-col>
                    <ion-col size="2">
                        <ion-toggle color="primary" class="ion--toggle"></ion-toggle>
                    </ion-col>
                </ion-row>
            </ion-card-content>
        </ion-card>
    </template>
</base-layout>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import baseLayout from "../../layouts/base-layout.vue";
import {
    useRouter
} from "vue-router";
import {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonToggle,
} from "@ionic/vue";

export default defineComponent({
    name: "App-privacy",
    components: {
        baseLayout,
        IonGrid,
        IonRow,
        IonCol,
        IonCard,
        IonCardContent,
        IonToggle,
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
.privacy--card {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: unset;
    margin: unset;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
}

ion-card-content {
    padding: 20px 15px;
    font-size: 12px;
    color: black;
}
</style>
