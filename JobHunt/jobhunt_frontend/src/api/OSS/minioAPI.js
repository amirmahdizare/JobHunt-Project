import * as minio from "minio";
const generateImageURL = async (source, id) => {
    const minioClient = new minio.Client({
        endPoint: 'oss.blytd.com',
        accessKey: 'WopooShoop1vich1',
        secretKey: 'Ajoob6oophu6ahTh1eethiekan1ahva7'
        // port: 9000,
        // useSSL: true,
    });
    const photoUrl = await minioClient.presignedUrl('GET', `stage-${source}`, id, 24 * 60 * 60);
    return photoUrl
}
export { generateImageURL }
