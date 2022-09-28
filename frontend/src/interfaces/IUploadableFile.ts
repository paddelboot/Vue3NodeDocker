export default interface IUploadableFile {
    file : File;
    id : string;
    url : string;
    status : string | null;
}