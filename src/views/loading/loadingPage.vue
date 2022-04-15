<template>
<ion-page>
    <ion-content fullscreen scroll-x="false" scroll-y="false">
        <div class="vertical-center">
            <div class="center">
                <router-link to="/onboarding" exact class="cursour_enble">

                    <ion-img src="/images/loading-splash-screen-logo.svg"></ion-img>

                </router-link>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonContent,
    IonPage,
    IonImg
} from "@ionic/vue";
export default {
    name: "loadingPage",
    props: ['loadershow'],
    components: {
        IonContent,
        IonPage,
        IonImg
    },
};
</script>

<style lang="scss" scoped>
ion-content {
    --background: linear-gradient(180deg, #3c7bbe 12.5%, #00b9f2 90.1%), #031a5a;
}

.loader_logo {
    width: 170px;
    height: 169px;
    max-width: 100%;
    min-width: 30%;
}

.vertical-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
