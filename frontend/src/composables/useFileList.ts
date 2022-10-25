import { ref } from 'vue';

import type UploadableFileHandler from '@/interfaces/UploadableFileHandler';
import FileHandler from '@/classes/FileHandler';

export default () => {

    const files = ref<UploadableFileHandler[]>([]);

    const addFiles = ( newFiles: FileList | null ) => {

        if ( newFiles == null ) return;

        let newUploadableFiles : UploadableFileHandler[] = Object.values( newFiles )
            .map( (file ) => new FileHandler( file ))
            .filter( ( file ) => !fileExists( file.id ) );

        files.value = files.value.concat( newUploadableFiles );

        console.log( files.value );
    }

    function fileExists( otherId : string ) {

        return files.value.some(( { id } ) => id === otherId );
    }

    function removeFile( file : UploadableFileHandler ) {

        const index = files.value.indexOf( file );

        if ( index > -1 ) files.value.splice( index, 1 );
    }

    return { files, addFiles, removeFile };
}

