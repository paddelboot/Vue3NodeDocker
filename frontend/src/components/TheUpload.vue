<script setup lang="ts">

import { ref } from 'vue';

const uploaded_image = ref(null);

const upload = () => {

  console.log('Uploading image: ' + uploaded_image.value);
}

</script>

<template>
  <main>
    <section>
      <div><input type="file" ref="uploaded_image" /></div>
      <div><button @click="upload()">Hochladen</button></div>
    </section>
  </main>
</template>
