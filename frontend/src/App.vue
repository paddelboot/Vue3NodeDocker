<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>

  <TheHeader />

  <main>
    <RouterView />
  </main>

</template>

<style scoped lang="scss">
@media (min-width: 1024px) {

  main {
    grid-area: main;
  }
}
</style>
