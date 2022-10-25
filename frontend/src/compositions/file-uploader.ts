import type UploadableFileHandler from '@/interfaces/UploadableFileHandler';
import type { U } from 'vitest/dist/global-ea084c9f';

export const uploadFile = async (file: UploadableFileHandler, url: string) => {

    let formData = new FormData();
    formData.append('file', file.file)

    file.status = 'loading'
    let response = await fetch(url, { method: 'POST', body: formData })

    file.status = response.ok

    return response
}

export const uploadFiles = ( files : Array<UploadableFileHandler> , url : string ) => {

    return Promise.all( files.map( ( file ) => uploadFile( file, url ) ) )

}

export default ( url : string ) => {

    return {
        uploadFile : ( file : UploadableFileHandler ) => {
            return uploadFile( file, url )
        },
        uploadFiles: function (files : Array<UploadableFileHandler>) {
            return uploadFiles(files, url)
        },
    }
}