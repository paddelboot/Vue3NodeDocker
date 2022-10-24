import type UploadableFile from '@/interfaces/UploadableFileHandler';

export default class FileHandler implements UploadableFile {

    file : File;
    id : string;
    url: string;
    status: string | null;

    constructor( file : File ) {
        this.file = file;
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
        this.url = URL.createObjectURL( file );
        this.status = null;

    }
}