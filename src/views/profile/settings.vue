<template>
  <base-layout :showToolbar="true" :showModal="showModal">
    <template #modalContent>
      <div
        v-if="selectLanguage"
        class="ion-align-items-end ion-flex ion-full-height"
      >
        <ion-card class="ion-no-margin ion-full-width border-radius">
          <ion-card-content class="ion-no-padding">
            <ion-row class="ion-padding">
              <ion-col size="6">
                <span class="ion-text-24 ion-text-black gilory-bold"
                  >Språkendring</span
                >
              </ion-col>
              <ion-col class="ion-text-end" size="6" @click="updateShowModal">
                <img
                  class="ion-padding-half"
                  src="/images/cross.png"
                  alt="cross"
                />
              </ion-col>
            </ion-row>
            <ion-item-divider
              class="ion-divider ion-margin-bottom"
            ></ion-item-divider>
            <div class="ion-flex-between ion-margin">
              <div class="ion-flex">
                <img src="/images/nor.png" alt="norway-flag" />
                <span
                  class="ion-align-self-center ion-text-medium gilory-medium ion-margin-start"
                  >Norwegian</span
                >
              </div>
              <div>
                <ion-checkbox color="secondary"></ion-checkbox>
              </div>
            </div>
            <div class="ion-margin-horizontal">
              <ion-item-divider
                class="ion-divider ion-margin-bottom"
              ></ion-item-divider>
            </div>
            <div class="ion-flex-between ion-margin">
              <div class="ion-flex">
                <img src="/images/eng.png" alt="eng-flag" />
                <span
                  class="ion-align-self-center ion-text-medium gilory-medium ion-margin-start"
                  >English</span
                >
              </div>
              <div>
                <ion-checkbox color="secondary"></ion-checkbox>
              </div>
            </div>
            <div class="ion-margin-horizontal">
              <ion-item-divider
                class="ion-divider ion-margin-bottom"
              ></ion-item-divider>
            </div>
            <div class="ion-padding-vertical ion-padding-horizontal">
              <button class="btn btn--secondary" @click="updateShowModal">
                Sende inn
              </button>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="ion-align-items-end ion-flex ion-full-height">
        <ion-card class="ion-no-margin ion-full-width border-radius">
          <ion-card-content class="ion-no-padding">
            <ion-row class="ion-padding">
              <ion-col size="6">
                <span class="ion-text-24 ion-text-black gilory-bold"
                  >Velg tema</span
                >
              </ion-col>
              <ion-col class="ion-text-end" size="6" @click="updateShowModal">
                <img
                  class="ion-padding-half"
                  src="/images/cross.png"
                  alt="cross"
                />
              </ion-col>
            </ion-row>
            <ion-item-divider
              class="ion-divider ion-margin-bottom"
            ></ion-item-divider>
            <div class="ion-flex-between ion-margin">
              <div class="ion-flex">
                <span
                  class="ion-align-self-center ion-text-medium gilory-medium"
                  >Light</span
                >
              </div>
              <div>
                <ion-checkbox color="secondary"></ion-checkbox>
              </div>
            </div>
            <div class="ion-margin-horizontal">
              <ion-item-divider
                class="ion-divider ion-margin-bottom"
              ></ion-item-divider>
            </div>
            <div class="ion-flex-between ion-margin">
              <div class="ion-flex">
                <span
                  class="ion-align-self-center ion-text-medium gilory-medium"
                  >Dark</span
                >
              </div>
              <div>
                <ion-checkbox color="secondary"></ion-checkbox>
              </div>
            </div>
            <div class="ion-margin-horizontal">
              <ion-item-divider
                class="ion-divider ion-margin-bottom"
              ></ion-item-divider>
            </div>
            <div class="ion-padding-vertical ion-padding-horizontal">
              <button class="btn btn--secondary" @click="updateShowModal">
                Sende inn
              </button>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </template>
    <template #toolbar>

       <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">

                <ion-col size="1" class="ion-text-center">

                 <img
              @click="router.go(-1)"
              class="navBar--back"
              src="/images/arrow-back.png"
              alt=""
            />

                </ion-col>
                <ion-col size="11" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;

white-space: normal;
text-align: center;

color: #000000;">
                          Settings
                    </ion-title>

                </ion-col>

              

            </ion-row>
          </ion-grid>
     
    </template>
    <template #content>
      <div class="settings">
        <ion-card
          class="profile--mini-card ion-no-margin"
          @click="router.push('/change-password')"
        >
          <ion-card-content class="ion-padding-half">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Bytt passord
                  </p>
                  <p class="ion-text-xxsmall ion-text-muted">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </ion-col>
              <ion-col size="1">
                <img
                  class="ion-margin-top"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card class="profile--mini-card ion-mt-10 ion-no-margin">
          <ion-card-content class="ion-padding-half" @click="showModal = true">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Språk
                  </p>
                  <p class="ion-text-xxsmall ion-text-muted">Norwegian</p>
                </div>
              </ion-col>
              <ion-col size="1">
                <img
                  class="ion-margin-top"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card class="profile--mini-card ion-mt-10 ion-no-margin">
          <ion-card-content
            class="ion-padding-half"
            @click="(showModal = true), (selectLanguage = false)"
          >
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Tema
                  </p>
                  <p class="ion-text-xxsmall ion-text-muted">Light</p>
                </div>
              </ion-col>
              <ion-col size="1">
                <img
                  class="ion-margin-top"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <div class="margin--top">
          <p class="ion-text-xsmall ion-text-muted gilory-medium">
            Login Settings
          </p>
        </div>
        <ion-card class="profile--mini-card ion-mt-10 ion-no-margin">
          <ion-card-content class="">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-12 ion-text-black ion-text-xsmall">
                    Enable/Disable Biometric ID for login and Purchase
                    Verifications.
                  </p>
                </div>
              </ion-col>
              <ion-col size="2">
                <ion-toggle class="ion-toggle" color="primary"></ion-toggle>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card class="profile--mini-card ion-mt-10 ion-no-margin">
          <ion-card-content class="">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-12 ion-text-black ion-text-xsmall">
                    Enable/Disable OTP login
                  </p>
                </div>
              </ion-col>
              <ion-col size="2">
                <ion-toggle class="ion-toggle" color="primary"></ion-toggle>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <div class="margin--top">
          <p class="ion-text-xsmall ion-text-muted gilory-medium">
            Notification Settings
          </p>
        </div>
        <ion-card class="profile--mini-card ion-mt-10 ion-no-margin">
          <ion-card-content class="">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-12 ion-text-black ion-text-xsmall">
                    Enable/Disable Email Notifications
                  </p>
                </div>
              </ion-col>
              <ion-col size="2">
                <ion-toggle class="ion-toggle" color="primary"></ion-toggle>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card class="profile--mini-card ion-mt-10 ion-no-margin">
          <ion-card-content class="">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-12 ion-text-black ion-text-xsmall">
                    Enable/Disable Push Notifications
                  </p>
                </div>
              </ion-col>
              <ion-col size="2">
                <ion-toggle class="ion-toggle" color="primary"></ion-toggle>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </div>
    </template>
    
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IonToggle, IonCheckbox, IonItemDivider } from "@ionic/vue";

export default defineComponent({
  name: "settings-page",
  components: {
    IonToggle,
    IonCheckbox,
    IonItemDivider,
  },
  setup() {
    let router = useRouter();

    let showModal = ref(false);

    let selectLanguage = ref(true);

    const updateShowModal = () => {
      showModal.value = false;
    };

    return { router, showModal, selectLanguage, updateShowModal };
  },
});
</script>
<style lang="scss" scoped>
.settings {
  margin: 20px 20px;
}
.margin--top {
  margin-top: 32px;
}
.border-radius {
  border-radius: 40px 40px 0px 0px;
}
img {
  object-fit: contain;
}
</style>
