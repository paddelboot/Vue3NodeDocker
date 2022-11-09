<template>

  <LayoutDefault>

    <template #main>

      <div class="wrapper">

        <DropZone @files-dropped="addFiles">

          <template #dropZone="{ dropZoneActive }">
            <div v-if="dropZoneActive">
              <div class="called-to-action">Drop them</div>
            </div>

            <div v-else>
              <div class="call-to-action">Drop stuff here</div>
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

          <template #upload>
            <button @click.prevent="uploadFiles( files )" v-show="files.length" class="upload">Upload</button>
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

button.upload{
  margin-top: 40px;
  padding: 10px 40px;
  cursor: pointer;
  background: none;
  border-radius: 5px;
  border: 1px solid grey;

  &:hover{
    background: lightgray;
  }
}
</style>

<script setup lang="ts">

import DropZone from '@/components/DropZone.vue';
import useFileList from '@/composables/useFileList';
import FilePreview from '@/components/FilePreview.vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import useFileUploader from '@/composables/useFileUploader';

const { uploadFiles } = useFileUploader( 'http://localhost:3000/upload' )
const { files, addFiles, removeFile } = useFileList();

function onInputChange(e: Event) {
  addFiles((e.target as HTMLInputElement).files);
  (e.target as HTMLInputElement).value = '';
}
</script>