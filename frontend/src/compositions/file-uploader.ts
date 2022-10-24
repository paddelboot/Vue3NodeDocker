import type UploadableFileHandler from '@/interfaces/UploadableFileHandler';

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

export default createUploader = ( url : string ) => {

    return {
        uploadFile : ( file : UploadableFileHandler ) => {
            return uploadFile( file, url )
        }
    }
}