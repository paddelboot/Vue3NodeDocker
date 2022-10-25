import { ref } from 'vue';

import type UploadableFileHandler from '@/interfaces/UploadableFileHandler'
import FileHandler from '@/classes/FileHandler'
import { useImageStore } from '@/stores/useImageStore'

export default () => {

    const store = useImageStore()

    const files = ref<UploadableFileHandler[]>([])

    const addFiles = (newFiles: FileList | null) => {

        if (newFiles == null) return

        let newUploadableFiles: UploadableFileHandler[] = Object.values(newFiles)
            .map((file) => new FileHandler(file))
            .filter((file) => !fileExists(file.id))

        store.addCount(newUploadableFiles.length)

        files.value = files.value.concat(newUploadableFiles)

        //console.log( files.value );
    }

    function fileExists(otherId: string) {

        return files.value.some(({ id }) => id === otherId)
    }

    function removeFile(file: UploadableFileHandler) {

        const index = files.value.indexOf(file);

        if (index > -1) {

            files.value.splice(index, 1)

            store.subtractCount()

        }
    }

    return { files, addFiles, removeFile }
}

