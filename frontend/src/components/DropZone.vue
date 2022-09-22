<template>
    <div @drop.prevent="onDrop" @dragenter.prevent="onDragEnter" @dragleave.prevent="onDragLeave" class="dropzone" :class="isActive ? 'active' : ''">
        <slot :isActive="isActive"></slot>
    </div>
</template>

<style lang="scss">
    .dropzone{
        width: 100%;

        &.active{
            background: rgb(226, 248, 226);
        }
    }
</style>

<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['files-dropped']);
const isActive = ref();

function onDrop( e : any ) {
    emit( 'files-dropped', [...e.dataTransfer.files])
}

function onDragEnter() {
    isActive.value = true;
}

function onDragLeave() {
    isActive.value = false;
}

function preventDefaults( e : any ) {
    e.preventDefault()
}

const events = [ 'dragenter', 'dragover', 'dragleave', 'drop' ];

onMounted( () => {
    events.forEach( (eventName) => {
        document.body.addEventListener( eventName, preventDefaults ) 
    })
})

onUnmounted( () => {
    events.forEach( (eventName) => {
        document.body.removeEventListener( eventName, preventDefaults ) 
    })
})
</script>