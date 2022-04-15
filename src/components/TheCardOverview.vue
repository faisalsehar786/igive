<template>
  <ion-card class="card">
    <ion-card-content class="card__content">
      <img :src="cardImage" alt="card" />
      <div class="ion--padding margin-bottom-14">
        <div class="ion-flex-between">
          <span class="ion-text-medium ion-text-black ion-text-bold">
            {{ cardName }}
          </span>
          <span class="ion-text-medium ion-text-black ion-text-bold">
            <span>$</span>{{ cardAmount }}
          </span>
        </div>
        <div class="ion-flex-between">
          <span class="ion-text-muted ion-text-xsmall">
            {{ cardNumber ?? cardUrl }}
          </span>
        </div>
        <div class="ion-flex-between">
          <span class="ion-text-xxsmall" v-if="cardCvv">
            <span class="ion-text-black gilory-bold">CVV: </span>
            <span class="ion-text-muted">
              {{ cardCvv }}
            </span>
          </span>
          <span class="ion-text-xxsmall" v-if="expirationDate">
            <span class="ion-text-black gilory-bold">Expiry: </span
            ><span class="ion-text-danger">{{ expirationDate }}</span>
          </span>
        </div>
      </div>

      <!-- <ion-grid>
        <ion-row>
          <ion-col size="6">
            <span class="ion-text-medium ion-text-black ion-text-bold">
              {{ cardName }}
            </span>
          </ion-col>
          <ion-col size="6">
            <span
              v-if="cardNumber"
              class="ion-text-medium ion-text-black ion-text-bold"
            >
              {{ cardAmount }}
            </span>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <span v-if="cardNumber">
              {{ cardNumber }}
            </span>
            <span>
              {{ cardUrl }}
            </span>
          </ion-col>
          <ion-col size="6"></ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            {{ cardCvv }}
          </ion-col>
          <ion-col size="6">
            {{ expirationDate }}
          </ion-col>
        </ion-row>
      </ion-grid> -->
      <!-- <div class="card__content--vendor">
        <span class="ion-text-medium ion-text-black ion-text-bold">{{
          storeName
        }}</span>
        <p class="ion-text-muted ion-text-small">{{ storeUrl }}</p>
      </div> -->
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cardImage: {
      type: String,
    },
    cardName: {
      type: String,
    },
    cardUrl: {
      type: String,
    },
    expirationDate: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
    cardAmount: {
      type: String,
    },
    cardCvv: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.ion--padding {
  padding: 0px 14px;
}
.margin-bottom-14 {
  margin-bottom: 14px;
}
</style>
