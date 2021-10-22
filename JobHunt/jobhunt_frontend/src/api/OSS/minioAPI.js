import * as minio from "minio";
const generateImageURL = async (id) =>{
const minioClient = new minio.Client({
    endPoint: 'oss.blytd.com',
    // port: 9000,
    // useSSL: true,
    accessKey: 'WopooShoop1vich1',
    secretKey: 'Ajoob6oophu6ahTh1eethiekan1ahva7'
});
const photoUrl = await minioClient.presignedUrl('GET', 'stage-central', id, 24*60*60)
return  photoUrl
}
export {generateImageURL}
