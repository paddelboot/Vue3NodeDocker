<template>

  <LayoutDefault>

    <template #main>

      <div class="wrapper">

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

      </div>

    </template>

  </LayoutDefault>

</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    max-width: 50vw;
    width: 100%;
    height: 100%;

    padding: 0;

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
import LayoutDefault from '@/layouts/LayoutDefault.vue';

const { files, addFiles, removeFile } = useFileList();

function onInputChange(e: Event) {
  addFiles((e.target as HTMLInputElement).files);
  (e.target as HTMLInputElement).value = '';
}
</script>