<template>
  <base-layout
    :showFooter="true"
    :showToolbar="true"
    :toolbarBackground="'ion-background-white'"
    :footerPadding="'ion-padding-twice'"
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
                          Add Card
                    </ion-title>

                </ion-col>

              

            </ion-row>
        </ion-grid>
    </template>
    <template #content>
      <form class="ion-padding-horizontal ion-margin-top">
        <ion-row>
          <ion-col>
            <ion-input class="ion-input" placeholder="Card Number" type="text" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-input class="ion-input" placeholder="Expiry(MM/YY)" type="text" />
          </ion-col>
          <ion-col size="6">
            <ion-input class="ion-input" placeholder="CVV" type="text" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-input
              class="ion-input"
              placeholder="Card Holder Name"
              type="text"
            />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-input class="ion-input" placeholder="Street Address" type="text" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-input class="ion-input" placeholder="City" type="text" />
          </ion-col>
          <ion-col size="6">
            <ion-input class="ion-input" placeholder="Post Code" type="text" />
          </ion-col>
        </ion-row>
      </form>
    </template>
    <template #footer>
      <div class="ion-padding-horizontal ion-margin-bottom ion-margin-horizontal">
        <button class="btn btn--secondary">save</button>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "../../layouts/base-layout.vue";

export default defineComponent({
  components: {
    BaseLayout,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>


ion-input{

   --background: rgba(239, 242, 246, 0.6);
    ;
    --color: #000000;
    ;
   --placeholder-color: rgb(0 0 0 / 95%);
    ;
    --padding-start: 21px;
    width: 100%;
    border-radius: 8px;
    font-family: "Gilroy Medium";
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    mix-blend-mode: normal;
    margin-top: 11.05px;
    opacity: 5.8;
}
</style>
  

