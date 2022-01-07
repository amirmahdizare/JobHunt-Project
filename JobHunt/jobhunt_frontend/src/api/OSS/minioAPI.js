const generateImageURL = async (source, id) => {
    return source=='jobhunt' 
    ? process.env.REACT_APP_API_ENDPOINT + '/file?path=' + id
    : process.env.REACT_APP_CENTRAL_API_ENDPOINT +  '/file?path=' + id

}
export { generateImageURL }
