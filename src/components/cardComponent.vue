<template>
  <ion-card class="home__card">
    <ion-card-content class="home__card--content">
      <img :src="cardImage" alt="" />
      <div class="padding--top-6">
        <div class="ion-text-medium ion-text-black text-weight-700">
          {{ storeName }}
        </div>
        <div class="ion-text-muted ion-text-xsmall">
          {{ storeUrl }}
        </div>
        <div class="ion-text-black ion-text-xxsmall">
          Utløpsdato: <span class="ion-text-danger">{{ expirationDate }}</span>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent } from "@ionic/vue";

export default defineComponent({
  components: {
    IonCard,
    IonCardContent,
  },
  props: ["cardImage", "storeUrl", "storeName", "expirationDate", "cardValue"],
});
</script>
<style>
.padding--top-6 {
  padding-top: 6px;
}
.ion-text-12 {
  font-size: 12px;
}
</style>



