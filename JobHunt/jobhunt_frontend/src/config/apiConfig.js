import axios from "axios";

const api = axios.create({
    // baseURL:process.env.REACT_APP_API_ENDPOINT
    baseURL: 'https://jobhuntapi.stg.blytd.com'
})

const centralApi = axios.create({
    baseURL: process.env.REACT_APP_CENTRAL_API_ENDPOINT
})
export { api, centralApi }