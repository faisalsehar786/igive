<template>
<base-layout :showToolbar="true" :auth="false">
    <template #toolbar>
        <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">
                <ion-col size="11" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;

white-space: normal;
text-align: center;

color: #000000;">
                        Vendors
                    </ion-title>

                </ion-col>

                <ion-col size="1" class="ion-text-center">

                  
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
        <div style="padding:0px 25px;">
            <ion-searchbar placeholder="Search Vendors" class="ion-no-padding"></ion-searchbar>
            <ion-grid class="ion-no-padding">
                <ion-row class="ion-padding-top">
                    <ion-col size="6" class="ion-text-center " v-for="index in 12" :key="index">
                        <div class="pGridcontroll " @click="router.push('/vendor-card')">
                            <div class="pGirdimg">
                                <img src="/images/cards.png" alt="" srcset="" style="border: 1px solid #F1F2F9;
    box-sizing: border-box;
    border-radius: 10px;" />
                            </div>
                            <div style="font-family: 'Gilroy-Medium';
    font-size:12px;
    line-height: 11px;
        font-weight: 600;
    text-align: center;
    color: #000000;padding: 9px 0px;">Steen & Strøm</div>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
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
import {
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar
} from "@ionic/vue";
import {
    useRouter
} from "vue-router";

export default defineComponent({
    name: "app-cart",
    components: {
        IonGrid,
        IonRow,
        IonCol,
        baseLayout,
        IonSearchbar,
    },
    setup() {
        let router = useRouter();
        let cards = ref([
            "Steen & strom",
            "Stryan Torg",
            "Maxbo",
            "blue house",
            "Maxbo",
            "blue house",
        ]);
        return {
            cards,
            router,
        };
    },
});
</script>

<style lang="scss" scoped>
ion-searchbar {
    height: 48px;
    --background: #F5F5F5;
    --border-radius: 40px;
    --color: #000000;
    --icon-color: #00B9F2;
    --box-shadow: none;
    --placeholder-opacity: 0.15;
}
</style>
