<template>
  <ion-card class="message-card">
    <ion-card-content class="ion-text-center">
      <div class="circle" :class="success ? 'success' : 'danger'">
        <img v-if="success" src="/images/tick.png" alt="tick" />
        <img v-else src="/images/failed.png" alt="tick" />
      </div>
      <div class="gilory-medium ion-margin ion-text-black">
        <span>
          {{
            success ? "Authentication Successful" : "Authentication Failed"
          }}</span
        >
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent } from "@ionic/vue";

export default defineComponent({
  props: ["success"],
  components: {
    IonCard,
    IonCardContent,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.circle {
  height: 75px;
  width: 75px;
  text-align: center;
  place-content: center;
  display: grid;
  border-radius: 50%;
  margin: auto;
}
.success {
  border: 2px solid#4AD395;
}
.danger {
  border: 2px solid#FF0000;
}
.message-card {
  width: 225px;
  height: 200px;
  margin: auto;
  background: #ffffff;
  border-radius: 8px;
}
</style>
