import axios from "axios";

const api = axios.create({
    baseURL:process.env.REACT_APP_API_ENDPOINT
})

const centalApi = axios.create({
    baseURL:process.env.REACT_APP_CENTRAL_API_ENDPOINT
})
export {api,centalApi}