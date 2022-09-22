<template>
  <section>
    <DropZone>Drop stuff here</DropZone>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import DropZone from '@/components/DropZone.vue';
</script>

<style scoped lang="scss">
.dropzone {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 10px;
  border: 1px dotted grey;
}


@media (min-width: 1024px) {
  section {
    display: flex;
    max-width: 50vw;
    flex-direction: column;
    align-items: flex-start;

    padding: 30px 0;

    >div {
      margin-bottom: 20px;
    }
  }
}
</style>


