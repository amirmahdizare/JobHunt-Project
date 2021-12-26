import axios from "axios";

const api = axios.create({
    baseURL: 'https://jobhuntapi.stg.blytd.com'
    // baseURL: process.env.REACT_APP_API_ENDPOINT
})

const centralApi = axios.create({
    // baseURL: process.env.REACT_APP_CENTRAL_API_ENDPOINT
    baseURL: 'https://centeral.stg.blytd.com'
})
export { api, centralApi }