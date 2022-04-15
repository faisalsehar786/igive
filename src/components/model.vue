<template>
  <div class="backdrop" v-if="showModal">
    <div class="backdrop__card">
      <slot name="modalContent" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "ion-model",
  setup() {
    const { showModal = false, updateShowModal }: any = inject("showModal");
    return {
      showModal,
      updateShowModal,
    };
  },
});
</script>
