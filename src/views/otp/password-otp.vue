<template>
<base-layout :showToolbar="true" :pageBackground="'ion-background-primary'">
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
        <div class="verification">

            <ion-row>
                <ion-col class="ion-align-self-start ion-margin-vertical" size="12">
                    <div class="ion-text-start signupTitle">
                        {{ title }}
                    </div>
                </ion-col>
                <ion-col class="ion-align-self-start" size="12">
                    <div class="ion-text-start signup_text">
                        {{ subTitle }}
                    </div>
                </ion-col>
            </ion-row>

            <div class="otp-input-wrapper">
                <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="4" :input-type="'password'" :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete">
                </v-otp-input>
            </div>
        </div>
    </template>
    <template #footer>
        <div class="ion-padding-vertical ion-padding-horizontal">
        <button
          class="get_start_button"
          @click="router.push('/new-password')"
        >
          Slå på
        </button>
        <div
          class="ion-text-white ion-text-small ion-mt-10 ion-text-center ion-margin-bottom"
        >
          Send kode på nytt?
        </div>
      </div>
    </template>
</base-layout>
</template>

<script lang="ts">
import baseLayout from "../../layouts/base-layout.vue";
import {
    defineComponent,
    ref,
    onMounted
} from "vue";
import {
    useRouter,
    useRoute
} from "vue-router";
import {
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/vue";

export default defineComponent({
    name: "otp-page",
    components: {
        baseLayout,
        IonGrid,
        IonRow,
        IonCol,
    },
    setup() {
        let router = useRouter();
        let route = useRoute();
        let value = ref();
        let title = ref("");
        let subTitle = ref("");

        const setInitialData = (payload: any) => {
            title.value = payload.title;
            subTitle.value = payload.subTitle;
        };

        onMounted(() => {
            setInitialData(route.params);
        });

        return {
            value,
            router,
            title,
            subTitle,
            route,
        };
    },
});
</script>

<style scoped>
.padding-top-44 {
    padding-top: 44px;
}

.margin-top-35 {
    margin-top: 35px;
}

.padding--bottom {
    padding-bottom: 336px;
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

.verification {
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

.otp-input-wrapper {

    background: rgba(239, 242, 246, 0.6);
    color: #000000;
    height: 42px;
    border: none;
    width: 100%;
    margin-top: 30px !important;
    border-radius: 8px;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    mix-blend-mode: normal;
    margin-top: 11.05px;
}

.ion-margin-iconback {
    margin: 25px;
}

.verification {
    height: 60vh;
}
</style>
