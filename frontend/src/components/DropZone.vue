<template>
    <div @drop.prevent="onDrop" @dragenter.prevent="onDragEnter" @dragleave.prevent="onDragLeave" class="dropzone">

        <label for="fileInput" :data-active="active">
            <slot name="dropZone" :dropZoneActive="active">

            </slot>

            <slot name="fileInput"></slot>

        </label>

    </div>
</template>

<style lang="scss">
.dropzone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 75%;
        border-radius: 10px;
        border: 1px dotted grey;

        cursor: pointer;

        &[data-active="true"] {
            background: rgb(226, 248, 226);
        }

        >div {
            flex-basis: 20%;

            display: flex;
            align-items: center;
        }
    }



    input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: #50596d;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }


}
</style>

<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['files-dropped']);
const active = ref();

function onDrop(e: DragEvent) {
    // console.log( e.dataTransfer.files );
    // console.log( [ ...e.dataTransfer.files ] );
    e.dataTransfer !== null ? emit('files-dropped', e.dataTransfer.files) : '';
}

function onDragEnter() {
    active.value = true;
}

function onDragLeave() {
    active.value = false;
}

function preventDefaults(e: any) {
    e.preventDefault()
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults)
    })
})

onUnmounted(() => {
    events.forEach((eventName) => {
        document.body.removeEventListener(eventName, preventDefaults)
    })
})
</script>