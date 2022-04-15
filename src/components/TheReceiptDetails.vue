<template>
  <base-layout
    :showToolbar="true"
    :backgroundPrimary="'toolbar-background-primary'"
  >
    <template #toolbar>
      <ion-grid>
        <ion-row style="padding:25px 25px;">
          <ion-col size="1" @click="router.go(-1)">
            <img class="navBar--back" src="/images/xwhite.png" alt="" />
          </ion-col>
          <ion-col size="11" class="ion-text-center">
            <div class="gilory-medium ion-text-medium ion-text-white">
              Transaksjonskvitteringer
            </div>
          </ion-col>
          
        </ion-row>
      </ion-grid>
    </template>
    <template #content>
      <div class="recepit">
        <div
          style="
            background-image: url('/images/receipts_details.svg');
            background-repeat: no-repeat;
            background-position: center;
            height: 80vh;
            position: relative;
          "
        >
          <img
            class="recepit__details--image"
            src="/images/Tick.svg"
            alt="Tick"
          />
          <div class="recepit__details">
            <div class="recepit__details--amount">
              <p class="ion-margin-vertical" style="    opacity: 0.45;">Amount Spent</p>
              <h2 class="ion-no-margin" style="font-family: 'Gilroy-Bold';
font-size: 30px;
line-height: 16px;
/* identical to box height, or 53% */


color: #000000;">Kr. 5,000</h2>
            </div>
            <div class="recepit__details--des">
              <ion-grid>
                <ion-row>
                  <ion-col class="ion-padding-start">
                    <div>
                      <p class="ion-text-12 gilory-bold">Date</p>
                      <p class="ion-text-12">20, Jan 2022</p>
                    </div>
                  </ion-col>
                  <ion-col size="4">
                    <p class="ion-text-12 gilory-bold">Time</p>
                    <p class="ion-text-12">11:28 AM</p>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col class="ion-padding-start">
                    <p class="ion-text-12 gilory-bold">Vendor Name</p>
                    <p class="ion-text-12">Amazon.com</p>
                  </ion-col>
                  <ion-col size="4">
                    <p class="ion-text-12 gilory-bold">Status</p>
                    <p class="ion-text-12 ion-text-secondary">Completed</p>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col class="ion-padding-start">
                    <p class="ion-text-12 gilory-bold">Gift Card Number</p>
                    <p class="ion-text-12">1234-3456-5678-8343</p>
                  </ion-col>
                  <ion-col size="4">
                    <p class="ion-text-12 gilory-bold">View Card</p>
                    <p class="ion-text-12 ion-text-secondary">Click Here</p>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="ion-padding-vertical ion-padding-horizontal ion-margin-horizontal">
        <button class="ion-margin-top btn btn--secondary ion-margin-bottom">
          Share Receipt
        </button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style lang="scss" scoped>
.recepit {
  background: rgba(0, 27, 92, 1);
  height: 62vh;
  border-radius: 0px 0px 40px 40px;
}
.recepit__details--image {
  position: absolute;
  right: 40%;
  top: 5%;
}
.recepit__details {
  display: grid;
  place-content: center;
  align-items: center;
  width: 100%;
  height: inherit;

  &--amount {
    width: 35vh;
    height: 15vh;
    display: grid;
    place-content: center;
    background-color: rgba(196, 196, 196, 0.15);
    border-radius: 10px;
  }
  &--des {
    width: 35vh;
    height: 30vh;
    background-color: rgba(196, 196, 196, 0.15);
    border-radius: 10px;
    margin-top: 1rem;
  }
}
.gilory-bold{
  opacity: 0.45;
}
</style>
  