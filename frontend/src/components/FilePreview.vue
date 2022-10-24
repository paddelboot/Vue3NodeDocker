<template>
    <component :is="tag" class="file-preview">
        <button @click="$emit('remove', file )" class="close-icon" aria-label="remove">x</button>
        <img :src="file.url" :alt="file.file.name" :title="file.file.name" />
    </component>
</template>

<style scoped lang="scss">
li {
    flex-basis: 20%;
    padding: 0 5px; 

    img{
        display: block;
        max-width: 100%;
    }
}
</style>

<script setup lang="ts">

import type IUploadableFile from '@/interfaces/UploadableFileHandler';
import type { PropType } from 'vue';

defineEmits([ 'remove' ] );


defineProps({
    file: {
        type: Object as PropType<IUploadableFile>,
        required: true
    },
    tag: {
        type: String,
        default: 'li'
    }
})
</script>
