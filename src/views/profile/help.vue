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
                             Hjelp
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    
    </template>
    <template #content>
      <div class="help--continar">
        <ion-card
          class="profile--mini-card ion-no-margin"
          @click="router.push('/support')"
        >
          <ion-card-content class="ion-padding-half">
            <ion-row>
              <ion-col>
                <div>
                  <p class="ion-text-bold ion-text-black ion-text-xsmall">
                    Support
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
        <div class="ion-mt-30 ion-margin-bottom">
          <p class="ion-no-margin gilory-medium">Spørsmål</p>
          <span class="ion-text-xsmall ion-text-muted">Ofte spurt</span>
        </div>
        <ion-accordion-group class="ion-accordian-group">
          <ion-accordion value="colors" class="ion-accordian">
            <ion-item slot="header">
              <ion-label class="ion-text-xsmall"
                >Lorem ipsum dolor sit amet, consectetur?</ion-label
              >
            </ion-item>
            <div slot="content" class="ion-padding ion-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-accordion-group class="ion-accordian-group ion-mt-10">
          <ion-accordion value="colors" class="ion-accordian">
            <ion-item slot="header">
              <ion-label class="ion-text-xsmall"
                >Lorem ipsum dolor sit amet, consectetur?</ion-label
              >
            </ion-item>
            <div slot="content" class="ion-padding ion-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-accordion-group class="ion-accordian-group ion-mt-10">
          <ion-accordion value="colors" class="ion-accordian">
            <ion-item slot="header">
              <ion-label class="ion-text-xsmall"
                >Lorem ipsum dolor sit amet, consectetur?</ion-label
              >
            </ion-item>
            <div slot="content" class="ion-padding ion-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-accordion-group class="ion-accordian-group ion-mt-10">
          <ion-accordion value="colors" class="ion-accordian">
            <ion-item slot="header">
              <ion-label class="ion-text-xsmall"
                >Lorem ipsum dolor sit amet, consectetur?</ion-label
              >
            </ion-item>
            <div slot="content" class="ion-padding ion-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-accordion-group class="ion-accordian-group ion-mt-10">
          <ion-accordion value="colors" class="ion-accordian">
            <ion-item slot="header">
              <ion-label class="ion-text-xsmall"
                >Lorem ipsum dolor sit amet, consectetur?</ion-label
              >
            </ion-item>
            <div slot="content" class="ion-padding ion-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-accordion-group class="ion-accordian-group ion-mt-10">
          <ion-accordion value="colors" class="ion-accordian">
            <ion-item slot="header">
              <ion-label class="ion-text-xsmall"
                >Lorem ipsum dolor sit amet, consectetur?</ion-label
              >
            </ion-item>
            <div slot="content" class="ion-padding ion-text-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ion-accordion>
        </ion-accordion-group>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import BaseLayout from "../../layouts/base-layout.vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/vue";

export default defineComponent({
  name: "help-page",
  components: {
    BaseLayout,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
  },
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style scoped>
.help--continar {
  margin: 20px 25px;
}
.ion-accordion-group {
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(27, 25, 86, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 50px;
  margin-top: 10px;
}
.ion-accordian {
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(27, 25, 86, 0.1);
  border-radius: 12px;
  width: 100%;
}

.ion-text-12 {
  font-size: 12px;
}
.ion-mt-30 {
  margin-top: 30px;
}
</style>
