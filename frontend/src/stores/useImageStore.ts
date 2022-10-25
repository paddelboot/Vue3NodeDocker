
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type UploadableFileHandler from '@/interfaces/UploadableFileHandler';

export const useImageStore = defineStore( 'images', () => {

    const imageCount = ref(0)
    const images = ref<Array<UploadableFileHandler>>([]);

    function addCount( count : number = 1 ) {
        imageCount.value += count
    }

    function addImage( image : UploadableFileHandler ) {
        images.value.push( image )
    }

    function subtractCount( count : number = 1 ) {
        imageCount.value -= count
    }

    return { imageCount, images, addCount, addImage, subtractCount }
})