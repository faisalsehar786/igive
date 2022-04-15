<template>
  <base-layout :showToolbar="true" :auth="false" :showFooter="true">
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
                         Card Details 
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
   
    </template>
    <template #content>
       <div style="padding: 0px 10px;">
      <card-overview
        :cardImage="'/images/amazon-card.png'"
        :cardName="'Amazon.com'"
        :cardNumber="'1234-4575-7654-1278'"
        :cardAmount="'500'"
        :cardCvv="'123'"
        :expirationDate="'12-08-2022'"
      >
      </card-overview>
      <div class="cardShared">
        <p class="gilory-medium gilory-bold">
          Shared Card Recipient Information
        </p>
        <div class="ion-flex-between ion-margin-top">
          <div>
            <p class="ion-text-xsmall gilory-bold">Recipient Name</p>
            <p class="ion-text-xsmall ion-text-muted">Jhon Doe</p>
          </div>
          <div>
            <p class="ion-text-xsmall gilory-bold">Email</p>
            <p class="ion-text-xsmall ion-text-muted">jhondoe@mail.com</p>
          </div>
        </div>
        <div class="ion-flex-between ion-margin-top">
          <div>
            <p class="ion-text-xsmall gilory-bold">Date Sent</p>
            <p class="ion-text-xsmall ion-text-muted">20/03/2022</p>
          </div>
          <div class="margin-right">
            <p class="ion-text-xsmall gilory-bold">Date Received</p>
            <p class="ion-text-xsmall ion-text-muted">21/03/2022</p>
          </div>
        </div>
        <div class="ion-margin-top">
          <p class="ion-text-xsmall gilory-bold">Message Sent</p>
          <div>
            <p class="ion-text-xsmall ion-text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
        </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import CardOverview from "../../components/TheCardOverview.vue";

export default defineComponent({
  name: "vendor-card",
  components: {
    CardOverview,
  },
  setup() {
    let router = useRouter();
    return { router };
  },
});
</script>
<style lang="scss" scoped>
.cardShared {
  margin: 40px 25px;
}
p {
  margin: 5px 0;
}

.margin-right {
  margin-right: 1.7rem;
}
</style>
