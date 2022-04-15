<template>
  <base-layout :showToolbar="true">
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
                          Support
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="support">
        <ion-card class="profile--mini-card ion-no-margin ion-mt-10">
          <ion-card-content class="ion-padding-half ion-position-relative">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Technical issue with app
                  </p>
                  <p class="ion-text-xxsmall ion-text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </ion-col>
            </ion-row>
            <div class="ticket--status">In Progress</div>
          </ion-card-content>
        </ion-card>
        <ion-card class="profile--mini-card ion-no-margin ion-mt-10">
          <ion-card-content class="ion-padding-half">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Problem with gift card
                  </p>
                  <p class="ion-text-xxsmall ion-text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </ion-col>
            </ion-row>
            <div class="ticket--status">In Progress</div>
          </ion-card-content>
        </ion-card>
        <ion-card class="profile--mini-card ion-no-margin ion-mt-10">
          <ion-card-content class="ion-padding-half">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Payment issues
                  </p>
                  <p class="ion-text-xxsmall ion-text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </ion-col>
            </ion-row>
            <div class="ticket--status">In Progress</div>
          </ion-card-content>
        </ion-card>
      </div>
      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

export default defineComponent({
  name: "support-tickets",
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    let router = useRouter();
    return { router, add };
  },
});
</script>
<style scoped>
.support {
  margin: 20px;
}
.ticket--status {
  position: absolute;
  position: absolute;
  color: white;
  top: 0px;
  right: 0;
  font-size: 10px;
  width: 60px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 0px 10px 0px 0px;
  text-align: center;
  background: #00b9f2;
}
</style>
