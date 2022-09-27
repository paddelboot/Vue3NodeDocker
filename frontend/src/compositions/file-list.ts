import { ref } from 'vue';

export default function() {

    const files = ref<UploadableFile[]>([]);

    function addFiles( newFiles: FileList | null ) {

        if ( newFiles == null ) return;

        let newUploadableFiles : UploadableFile[] = Object.values( newFiles )
            .map( (file ) => new UploadableFile( file ))
            .filter( ( file ) => !fileExists( file.id ) );

        files.value = files.value.concat( newUploadableFiles );

        console.log( files.value )
    }

    function fileExists( otherId : string ) {

        return files.value.some(( { id } ) => id === otherId );
    }

    function removeFile( file : UploadableFile ) {

        const index = files.value.indexOf( file );

        if ( index > -1 ) files.value.splice( index, 1 );
    }

    return { files, addFiles, removeFile };
}

interface UploadableFile {
    file : object;
    id : string;
    url : string;
    status : string | null;
}

class UploadableFile {

    constructor( file : File ) {
        this.file = file;
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
        this.url = URL.createObjectURL( file );
        this.status = null;

    }
}