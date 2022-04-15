<template>
  <ion-card class="transaction-card">
    <ion-card-content>
      <div class="circle success">
        <img src="/images/tick.png" alt="tick" />
      </div>
      <div class="gilory-medium ion-margin ion-text-black ion-text-center">
        <span class="gilory-medium"> Transaction Successful</span>
      </div>
      <div class="ion-margin">
        <img src="/images/dotted_line.png" alt="line" />
      </div>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <p class="ion-text-12 ion-text-muted">Date</p>
            <p class="gilory-bold ion-text-12">20, Jan 2022</p>
          </ion-col>
          <ion-col size="6" class="ion-text-center">
            <p class="ion-text-12 ion-text-muted">Time</p>
            <p class="gilory-bold ion-text-12">11:28</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <p class="ion-text-12 ion-text-muted">Vendor Name</p>
            <p class="gilory-bold ion-text-12">Amazon.com</p>
          </ion-col>
          <ion-col size="6" class="ion-text-center">
            <p class="ion-text-12 ion-text-muted">Status</p>
            <p class="gilory-bold ion-text-12">Completed</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <p class="ion-text-12 ion-text-muted">Amount Spent</p>
            <p class="gilory-bold ion-text-12">Kr, 750</p>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  setup() {
    return {};
  },
});
</script>
<style scoped>
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
.message-card {
  width: 225px;
  height: 200px;
  margin: auto;
  background: #ffffff;
  border-radius: 8px;
}
.transaction-card:after {
  content: "";
  height: 30px;
  width: 30px;
  border: 1px solid;
  position: absolute;
}
</style>
