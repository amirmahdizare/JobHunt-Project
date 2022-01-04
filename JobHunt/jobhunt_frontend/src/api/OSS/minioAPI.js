import * as minio from "minio";
const generateImageURL = async (source, id) => {
    const minioClient = new minio.Client({
        endPoint: process.env.REACT_APP_API_OSS_ENDPOINT,
        accessKey: process.env.REACT_APP_API_OSS_ACCESSKEY,
        secretKey: process.env.REACT_APP_API_OSS_SECRETKEY
        // port: 9000,
        // useSSL: true,
    });
    if (process.env.REACT_APP_API_ENDPOINT == "https://jobhuntapi.stg.blytd.com")
        var photoUrl = await minioClient.presignedUrl('GET', `stage-${source}`, id, 24 * 60 * 60);
    else {
        var photoUrl = await minioClient.presignedUrl('GET', process.env.REACT_APP_API_OSS_POCKET, id, 24 * 60 * 60);
    }
    return photoUrl
}
export { generateImageURL }
