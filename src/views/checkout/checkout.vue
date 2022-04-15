<template>
  <base-layout
    :auth="true"
    :showToolbar="true"
    :showModal="showModal"
    :showFooter="true"
  >
    <template #modalContent>
      <div class="ion-flex ion-full-height ion-align-items-end">
        <ion-card class="ion-no-margin ion-full-width border-radius">
          <ion-card-content class="ion-no-padding">
            <ion-row class="ion-padding">
              <ion-col size="6">
                <span class="ion-text-24 ion-text-black gilory-bold"
                  >Checkout</span
                >
              </ion-col>
              <ion-col class="ion-text-end" size="6">
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
            <ion-row class="ion-padding-horizontal">
              <ion-col size="6">
                <span class="ion-text-black ion-text-medium ion-text-muted"
                  >Payment</span
                >
              </ion-col>
              <ion-col size="6" class="ion-text-end">
                <img
                  class="ion-margin-end"
                  src="/images/masterCard.png"
                  alt="master-card"
                />
                <img src="/images/arrow.png" alt="arrow" />
              </ion-col>
            </ion-row>
            <div class="ion-padding-horizontal">
              <ion-item-divider
                class="ion-divider ion-margin-vertical"
              ></ion-item-divider>
            </div>
            <ion-row class="ion-padding-horizontal">
              <ion-col size="6">
                <span class="ion-text-black ion-text-medium ion-text-muted"
                  >Total</span
                >
              </ion-col>
              <ion-col size="6" class="ion-text-end">
                <span>KR 1523</span>
                <img
                  class="ion-margin-start"
                  src="/images/arrow.png"
                  alt="arrow"
                />
              </ion-col>
            </ion-row>
            <div class="ion-padding-horizontal">
              <ion-item-divider
                class="ion-divider ion-margin-vertical"
              ></ion-item-divider>
            </div>
            <div class="ion-text-center">
              <p class="">
                By placing an order you agree to our <strong style="color: #000000de;">Terms</strong> And
                <strong style="color: #000000de;">Conditions</strong>
              </p>
            </div>
            <div class="ion-padding-horizontal ion-padding-bottom">
              <button
                class="ion-margin-top btn btn--secondary"
                @click="showModal = false"
              >
                Pay Now
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
                           Checkout
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <div class="ion-custom_padding">
      <ion-row class="ion-padding">
        <ion-col size="6">
          <span class="ion-text-small ion-text-bold">Order Summary</span>
        </ion-col>
        <ion-col class="ion-text-end" size="6">
          <img class="ion-text-end" src="/images/edit.png" alt="edit" />
        </ion-col>
      </ion-row>
      <ion-row class="ion-padding-horizontal">
        <ion-col>
          <img
            style="border-radius: 10px"
            src="/images/promotion-card.png"
            alt="card"
          />
        </ion-col>
        <ion-col>
          <p class="ion-no-margin gilory-medium">Amazon Gift Cards</p>
          <p class="ion-no-margin ion-text-xxsmall ion-text-muted">
            www.amazon.com
          </p>
          <p class="ion-no-margin gilory-bold ion-padding-top">kr 500</p>
        </ion-col>
      </ion-row>
      <ion-item-divider
        class="ion-divider ion-margin-vertical"
      ></ion-item-divider>

      </div>
    </template>
    <template #footer>
       <div class="ion-custom_padding">
      <ion-item-divider
        class="ion-divider ion-margin-vertical"
      ></ion-item-divider>
      <div>
        <div class="ion-flex-between ion-padding-horizontal ion-margin-bottom">
          <p class="ion-no-margin ion-text-muted ion-text-xsmall">SubTotal</p>
          <p class="ion-no-margin ion-text-black ion-text-xsmall">Kr 1500</p>
        </div>
        <div class="ion-flex-between ion-padding-horizontal ion-margin-bottom">
          <p class="ion-no-margin ion-text-muted ion-text-xsmall">Tax</p>
          <p class="ion-no-margin ion-text-black ion-text-xsmall">Kr 25</p>
        </div>
      </div>
      <div class="ion-flex-between ion-padding-horizontal">
        <p class="ion-no-margin ion-text-black ion-text-bold">Total</p>
        <p class="ion-no-margin ion-text-black ion-text-bold">Kr 1525</p>
      </div>
      <ion-item-divider
        class="ion-divider ion-margin-vertical"
      ></ion-item-divider>
      <div class="ion-padding-horizontal ion-margin-bottom">
        <button
          @click="showModal = true"
          class="ion-margin-top btn btn--secondary"
        >
          Proceed To Payment
        </button>
      </div>
       </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import BaseLayout from "../../layouts/base-layout.vue";
import { defineComponent, ref } from "vue";
import { IonGrid, IonRow, IonCol, IonItemDivider } from "@ionic/vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "app-checkout",
  components: {
    BaseLayout,
    IonGrid,
    IonRow,
    IonCol,
    IonItemDivider,
  },     
  setup() {
    let showModal = ref(false);

    let router=useRouter();
    return { showModal,router };
  },
});
</script>
<style scoped>
.border-radius {
  border-radius: 30px 30px 0px 0px;
}
.ion-custom_padding{
  padding: 0px 8px;;
}
</style>
