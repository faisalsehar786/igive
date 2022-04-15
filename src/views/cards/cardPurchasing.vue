<template>
  <base-layout
    :showToolbar="true"
    :toolbarBackground="'ion-background-white'"
    :auth="false"
    :footerPadding="'ion-padding'"
  >
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
                        Purchase Gift Card
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>

    </template>
    <template #content>
      <div class="ion-padding-card-perchasing">
      <div class="ion-padding">
        <img
          class="ion-image-radius"
          src="/images/amazon-card.png"
          alt="amazon"
        />
      </div>
      <div class="ion-padding">
        <span
          class="ion-text-medium ion-text-black ion-text-bold ion-no-margin"
        >
          Amazon Gift Cards
        </span>
        <p class="ion-no-margin ion-text-muted ion-text-small">
          www.amazon.com
        </p>
      </div>
      <div class="ion-padding">
        <p class="ion-text-small ion-text-black">
          Select The Number Of Gift Cards
        </p>
        <div class="card__numbers">
          <div
            class="card__numbers--item"
            v-for="(number, index) in numbers"
            :key="index"
          >
            {{ number }}
          </div>
        </div>
      </div>
      <ion-item-divider
        class="ion-divider ion-margin-vertical"
      ></ion-item-divider>
      <div class="ion-flex-between ion-padding-horizontal">
        <span class="ion-text-small ion-align-self-center ion-no-margin">
          Select Gift Card Balance
        </span>
        <p class="ion-text-large ion-no-margin ion-text-bold">500,-</p>
      </div>
      <div class="ion-padding-horizontal">
        <ion-range color="secondary" :pin="true" class="ion-range"></ion-range>
      </div>
      <ion-item-divider
        class="ion-divider ion-margin-vertical"
      ></ion-item-divider>
      <ion-item class="ion-item">
        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
        <ion-label class="ion-text-xsmall ion-text-black"
          >Lorem ipsum dolor sit amet, consectetur.
        </ion-label>
      </ion-item>

      </div>
    </template>
    <template #footer>
      <div class="ion-padding-vertical ion-padding-horizontal ion-margin-horizontal">
        <button class="ion-margin-top btn btn--secondary">Buy Now</button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonRange,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import baseLayout from "../../layouts/base-layout.vue";
export default defineComponent({
  components: {
    baseLayout,
    IonGrid,
    IonRow,
    IonCol,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonItemDivider,
    IonRange,
  },
  setup() {
    const numbers = ref([1, 2, 3, 4, 5]);
     let router = useRouter();
    return {
      numbers,
      router
    };
  },
});
</script>
<style scoped>
.ion-range {
  --bar-height: 10px;
  --bar-border-radius: 20px;
  --knob-background: #00b9f2;
  --bar-background-active: #00b9f2 !important;
}
.ion-range .range-bar-active {
  background: #00b9f2;
}
.ion-item {
  --inner-border-width: 0px;
}
.ion-checkbox {
  --size: 20px !important;
}
.ion-padding-card-perchasing{

  padding: 0px 8px;
}

</style>
