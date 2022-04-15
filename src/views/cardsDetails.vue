<template>
  <ion-page>
    <ion-toolbar class=" ion-no-padding" color="light">
        <ion-grid class="ion-no-padding" >
            <ion-row style="padding: 24px 25px;">
                <ion-col size="11" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;

white-space: normal;
text-align: center;

color: #000000;">
                        My Cards
                    </ion-title>

                </ion-col>

                <ion-col size="1" class="ion-text-center">
               <svg width="30" height="30" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 17.25V15C13.75 12.1005 11.3995 9.75 8.5 9.75C5.60051 9.75 3.25 12.1005 3.25 15V17.25C3.25 19.725 1 20.325 1 21.75C1 23.025 3.925 24 8.5 24C13.075 24 16 23.025 16 21.75C16 20.325 13.75 19.725 13.75 17.25Z" stroke="#11AFD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.50014 25.5C7.74189 25.5 7.02939 25.4745 6.35889 25.425C6.65226 26.3609 7.51939 26.9978 8.50014 26.9978C9.48088 26.9978 10.348 26.3609 10.6414 25.425C9.97089 25.4745 9.25839 25.5 8.50014 25.5Z" fill="#11AFD4"/>
<path d="M12.3062 12V11.468L14.0352 9.704C14.4972 9.242 14.7282 8.84533 14.7282 8.514C14.7282 8.23867 14.6442 8.024 14.4762 7.87C14.3082 7.716 14.1029 7.639 13.8602 7.639C13.3982 7.639 13.0622 7.85833 12.8522 8.297L12.3062 7.975C12.4602 7.65767 12.6725 7.41733 12.9432 7.254C13.2185 7.09067 13.5219 7.009 13.8532 7.009C14.2639 7.009 14.6209 7.14433 14.9242 7.415C15.2275 7.68567 15.3792 8.04967 15.3792 8.507C15.3792 9.00167 15.0875 9.54067 14.5042 10.124L13.2512 11.37H15.4702V12H12.3062Z" fill="white"/>
</svg>


                </ion-col>

            </ion-row>
        </ion-grid>
    </ion-toolbar>
    <ion-toolbar class="segment">
      <ion-segment :value="tabName" class="tabs__wrapper">
        <ion-segment-button
          value="activeCards"
          @click="changeTab('activeCards')"
          class="tabs__button"
        >
          <ion-label>Active</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="usedCards"
          class="tabs__button"
          @click="changeTab('usedCards')"
        >
          <ion-label>Used</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="expireCards"
          class="tabs__button"
          @click="changeTab('expireCards')"
        >
          <ion-label>Expired</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="shareCards"
          class="tabs__button"
          @click="changeTab('expireCards')"
        >
          <ion-label>Shared</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
    <ion-content :fullscreen="true">
      <div class="container">
        <div v-if="tabName == 'activeCards'">
          <ion-card
            class="promotion__card"
            v-for="(card, index) in activeCards"
            :key="index"
          >
            <ion-card-content
              class="promotion__card--content"
              @click="router.push('/card')"
            >
              <img class="" src="/images/promotion-card.png" alt="" />
              <div class="">
                <div class="ion-text-bold ion-text-medium ion-text-black">
                  Amazon.com
                </div>
                <div
                  class="ion-text-black ion-text-xxsmall ion-display-block margin-top-4"
                >
                  Expiration Date:
                  <span class="ion-text-danger">25-01-2022</span>
                </div>
                <div class="ion-text-black ion-text-xxsmall margin-top-4">
                  Code:
                  <span class="ion-text-muted">AM2022</span>
                </div>
                <div class="price-btn margin-top-4">Kr. 300</div>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
        <div v-if="tabName == 'usedCards'">
          <ion-card
            class="promotion__card"
            v-for="(card, index) in usedCards"
            :key="index"
          >
            <ion-card-content
              class="promotion__card--content"
              @click="router.push('/card')"
            >
              <img class="" src="/images/promotion-card.png" alt="" />
              <div class="">
                <div
                  class="ion-text-bold ion-text-medium ion-text-black margin-top-4"
                >
                  Amazon.com
                </div>
                <div
                  class="ion-text-black ion-text-xxsmall ion-display-block margin-top-4"
                >
                  Expiration Date:
                  <span class="ion-text-danger">25-01-2022</span>
                </div>
                <div class="ion-text-black ion-text-xxsmall margin-top-4">
                  Code:
                  <span class="ion-text-muted">AM2022</span>
                </div>
                <div class="price-btn margin-top-4">Kr. 300</div>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
        <div v-if="tabName == 'expireCards'">
          <ion-card
            class="promotion__card"
            v-for="(card, index) in expireCards"
            :key="index"
          >
            <ion-card-content
              class="promotion__card--content"
              @click="router.push('/card')"
            >
              <img class="" src="/images/promotion-card.png" alt="" />
              <div class="">
                <div class="ion-text-bold ion-text-medium ion-text-black">
                  Amazon.com
                </div>
                <div
                  class="ion-text-black ion-text-xxsmall ion-display-block margin-top-4"
                >
                  Expiration Date:
                  <span class="ion-text-danger">25-01-2022</span>
                </div>
                <div class="ion-text-black ion-text-xxsmall margin-top-4">
                  Code:
                  <span class="ion-text-muted">AM2022</span>
                </div>
                <div class="price-btn margin-top-4">Kr. 300</div>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCard,
    IonCardContent,
  },
  setup() {
    let activeCards = ref([1, 2, 3]);
    let usedCards = ref([1, 2]);
    let expireCards = ref([1]);
    let router = useRouter();

    let tabName = ref("activeCards");

    function segmentChanged(ev: CustomEvent) {
      console.log("Segment changed", ev.target);
    }

    function changeTab(name: string) {
      tabName.value = name;
    }
    return {
      activeCards,
      expireCards,
      usedCards,
      tabName,
      segmentChanged,
      changeTab,
      router,
    };
  },
});
</script>
<style scoped>
.container {
  margin: auto;
  height: 100%;
  padding: 1rem !important;
}

.toolbar > div {
  display: flex;
  justify-content: space-between;
}
.toolbar > div h2 {
  margin: unset;
}
.toolbar {
  --background: unset;
  padding: 1rem;
  display: flex;
}
.tabs__wrapper {
  height: 48px;
    --background: #ffffff;
    border-radius: unset;
  
    width: 100%;
    padding: 3px 25px;
}
.segment-button-checked {
  --color-checked: #00B9F2;
  background: #ffffff;
  mix-blend-mode: normal;

      background: #FFFFFF;
    mix-blend-mode: normal;
    box-shadow: 3px 3px 15px rgb(0 0 0 / 6%);
    border-radius: 80px;
}
:host::before {
  border: unset;
}
.tabs__button::before {
  border: unset;
}
.tabs__button {
  --color: #ccc;
  --color-checked:#00B9F2;
  width: 20rem;
  font-size: 12px;
  font-weight: 600;
  height: 38px;
}

.promotion__card {
  margin: unset;
  margin-top: 10px;
  background: #ffffff;
  /* box-shadow: 0px 2px 15px rgba(27, 25, 86, 0.1); */
  border-radius: 10px;
}
.promotion__card--content {
  padding: 13px;
  display: flex;
  flex-wrap: wrap;
}
.promotion__card--content img {
  padding-right: 17px;
}
.promotion__card-text h2 {
  font-size: 20px;
}
.promotion__card-text span {
  color: red;
}
.segment {
  --background:  #ffffff;
  --padding-start: none;
  background: #ffffff;
}
.segment.toolbar-container {
  padding: unset;
}
.price-btn {
  width: 60px;
  height: 25px;
  background: #00B9F2;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
}
.margin-top-4 {
  margin-top: 4px;
}
.ion-text-medium{
font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 18px !important;
    line-height: 22px;
    color: #000000 !important;

}

 ion-segment-button {  

  --border-radius: 35px;
}

</style>
