<template>
  <section>
    <DropZone @files-dropped="addFiles">

      <template #dropZone="{ dropZoneActive }">
        <div v-if="dropZoneActive">
          <div>Drop them</div>
        </div>

        <div v-else>
          <div>Drop stuff here</div>
        </div>
      </template>

      <template #fileInput>
        <div><input type="file" @change="onInputChange" id="fileInput" /></div>
      </template>

      <template #filePreview>
        <ul v-show="files.length" class="preview">
          <FilePreview v-for="file of files" :file="file" @remove="removeFile" />
        </ul>
      </template>

    </DropZone>
  </section>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  section {
    display: flex;
    max-width: 50vw;
    flex-direction: column;
    align-items: flex-start;

    padding: 30px 0;

  }
}

ul.preview {

  display: flex;
  margin-top: 30px;
  padding: 0;
  list-style: none;
}
</style>

<script setup lang="ts">

import DropZone from '@/components/DropZone.vue';
import useFileList from '@/compositions/file-list';
import FilePreview from '@/components/FilePreview.vue';

const { files, addFiles, removeFile } = useFileList();

function onInputChange(e: Event) {
  addFiles((e.target as HTMLInputElement).files);
  (e.target as HTMLInputElement).value = '';
}
</script>




