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

  @media (min-width: 1024px) {

    main {
      grid-area: main;
      display: flex;
      justify-content: center;

      &>section {
        display: flex;
        justify-content: flex-start;
        width: 50%;
        max-width: 50%;
      }
    }
  }
}
</style>
