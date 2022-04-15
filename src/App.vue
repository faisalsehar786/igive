<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
<style>
ion-app {
  font-family: Gilroy-Medium !important;
}
ion-content {
  font-family: Gilroy-Medium;
}
ion-toolbar {
  font-family: Gilroy-Medium;
}
</style>
