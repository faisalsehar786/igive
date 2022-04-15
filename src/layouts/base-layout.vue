<template>
  <ion-page class="ion-page" :class="pageBackground">
    <div class="backdrop" v-if="showModal">
      <slot name="modalContent" />
    </div>
    <ion-toolbar
      :class="backgroundPrimary"
      class="ion-toolbar"
      v-if="showToolbar"
    >
      <slot name="toolbar" />
    </ion-toolbar>
    <ion-content class="ion-content"  fullscreen="true" scroll-y="true">
      <div  v-if="auth" >
        <slot name="content" />
      </div>
      <div v-else>
        <slot name="content" />
      </div>
    </ion-content>
    <ion-footer v-if="showFooter">
      <slot name="footer" />
    </ion-footer>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonFooter, IonToolbar } from "@ionic/vue";

export default defineComponent({
  props: {
    showFooter: {
      type: Boolean,
      default: true,
    },
    footerBackground: {
      type: String,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
    auth: {
      type: Boolean,
      default: true,
    },
    showToolbar: {
      type: Boolean,
      default: false,
    },
    pageBackground: {
      type: String,
    },
    backgroundPrimary: {
      type: String,
    },
  },
  components: {
    IonPage,
    IonContent,
    IonFooter,
    IonToolbar,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.ion-toolbar {
  --background-color: white;
  --background: white;
}

.ion-content {
  --background: transparent;
}

.content-container {
  height: 100%;
}

</style>
