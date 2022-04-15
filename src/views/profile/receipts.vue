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
                         Receipts
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
     
    </template>
    <template #content>
      <div class="receipts">
        <ion-card class="card ion-no-margin">
          <ion-card-content>
            <p class="gilory-bold ion-text-black">Today</p>
            <div class="ion-flex-between ion-mt-10">
              <div class="receipts-picture">
                <img src="/images/M.png" alt="" srcset="" />
              </div>
              <div class="receipts-vendor">
                <span class="gilory-bold ion-text-xsmall">McDonald's</span>
                <span class="ion-text-xxsmall ion-display-block"
                  >Food & Beverages</span
                >
              </div>
              <div>
                <span class="gilory-bold ion-text-secondary ion-text-medium"
                  >10,-</span
                >
                <img
                  class="ion-margin-start"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <ion-item-divider
              class="ion-divider ion-margin-vertical"
            ></ion-item-divider>
            <div class="ion-flex-between">
              <div class="receipts-picture">
                <img src="/images/M.png" alt="" srcset="" />
              </div>
              <div class="receipts-vendor">
                <span class="gilory-bold ion-text-xsmall">McDonald's</span>
                <span class="ion-text-xxsmall ion-display-block"
                  >Food & Beverages</span
                >
              </div>
              <div>
                <span class="gilory-bold ion-text-secondary ion-text-medium"
                  >10,-</span
                >
                <img
                  class="ion-margin-start"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <ion-item-divider
              class="ion-divider ion-margin-vertical"
            ></ion-item-divider>
            <div class="ion-flex-between">
              <div class="receipts-picture">
                <img src="/images/M.png" alt="" srcset="" />
              </div>
              <div class="receipts-vendor">
                <span class="gilory-bold ion-text-xsmall">McDonald's</span>
                <span class="ion-text-xxsmall ion-display-block"
                  >Food & Beverages</span
                >
              </div>
              <div>
                <span class="gilory-bold ion-text-secondary ion-text-medium"
                  >10,-</span
                >
                <img
                  class="ion-margin-start"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card class="card ion-mt-10 ion-no-margin">
          <ion-card-content>
            <p class="gilory-bold ion-text-black">Yesterday</p>
            <div class="ion-flex-between ion-mt-10">
              <div class="receipts-picture">
                <img src="/images/M.png" alt="" srcset="" />
              </div>
              <div class="receipts-vendor">
                <span class="gilory-bold ion-text-xsmall">McDonald's</span>
                <span class="ion-text-xxsmall ion-display-block"
                  >Food & Beverages</span
                >
              </div>
              <div>
                <span class="gilory-bold ion-text-secondary ion-text-medium"
                  >10,-</span
                >
                <img
                  class="ion-margin-start"
                  src="/images/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { IonItemDivider } from "@ionic/vue";

export default defineComponent({
  name: "receipts-page",
  components: {
    IonItemDivider,
  },
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style lang="scss" scoped>
.receipts {
  margin: 25px;
}
.receipts-picture {
  height: 38px;
  width: 38px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.receipts-vendor {
  flex-grow: 2;
  margin-left: 20px;
}
</style>
