export default interface UploadableFile {
    file : File;
    id : string;
    url : string;
    status : string | boolean | null;
}