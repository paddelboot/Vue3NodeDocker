<template>
    <div @drop.prevent="onDrop" @dragenter.prevent="onDragEnter" @dragleave.prevent="onDragLeave" class="dropzone" :data-active="active">
        <slot :dropZoneActive="active"></slot>
    </div>
</template>

<style lang="scss">
    .dropzone{
        width: 100%;

        &[data-active="true"]{
            background: rgb(226, 248, 226);
        }
    }
</style>

<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['files-dropped']);
const active = ref();

function onDrop( e : any ) {
    console.log( e.dataTransfer.files );
    console.log( [ ...e.dataTransfer.files ] );
    emit( 'files-dropped', [...e.dataTransfer.files])
}

function onDragEnter() {
    active.value = true;
}

function onDragLeave() {
    active.value = false;
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