
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type UploadableFileHandler from '@/interfaces/UploadableFileHandler';

export const useImageStore = defineStore( 'images', () => {

    const imageCount = ref(0)
    const images = ref<Array<UploadableFileHandler>>([]);

    function addCount() {
        imageCount.value++
    }

    function addImage( image : UploadableFileHandler ) {
        images.value.push( image )
    }

    return { imageCount, images, addCount, addImage }
})