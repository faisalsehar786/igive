<template>
  <base-layout>
    <template #content>
      <div class="loading">
        <img src="/images/logo-2.png" alt="logo" />
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "../../layouts/base-layout.vue";

export default defineComponent({
  name: "loading-page",
  components: { BaseLayout },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.loading {
  height: inherit;
  background: linear-gradient(180deg, #3c7bbe 12.5%, #00b9f2 90.1%), #031a5a;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
