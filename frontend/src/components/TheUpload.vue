<template>
  <section>
    <div class="dragdrop">
      <div class="droparea">
        <label>Dateien hier hinziehen</label>
      </div>
    </div>
    <div class="dialog">
      <input type="file" ref="uploaded_image" />
    </div>
    <div>
      <button @click="upload()">Hochladen</button>
    </div>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const uploaded_image = ref(null);

const upload = async () => {

  console.log(uploaded_image.value.files[0]);
}
</script>

<style scoped lang="scss">
.dragdrop {
  width: 100%;

  .droparea {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius: 10px;
    border: 1px dotted grey;
  }
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


