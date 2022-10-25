<template>
    <component :is="tag" class="file-preview">
        <button @click="$emit('remove', file)" class="close-icon" aria-label="remove">x</button>
        <img :src="file.url" :alt="file.file.name" :title="file.file.name" />
        <span class="status-indicator loading-indicator" v-show="file.status == 'loading'">In Progress</span>
        <span class="status-indicator success-indicator" v-show="file.status == true">Uploaded</span>
        <span class="status-indicator failure-indicator" v-show="file.status == false">Error</span>
    </component>
</template>

<style scoped lang="scss">
li {
    flex-basis: 20%;
    padding: 0 5px;

    img {
        display: block;
        max-width: 100%;
    }
}
</style>

<script setup lang="ts">

import type UploadableFileHandler from '@/interfaces/UploadableFileHandler';
import type { PropType } from 'vue';

defineEmits(['remove']);

defineProps({
    file: {
        type: Object as PropType<UploadableFileHandler>,
        required: true
    },
    tag: {
        type: String,
        default: 'li'
    }
})
</script>