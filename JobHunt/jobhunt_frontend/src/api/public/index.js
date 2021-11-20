import { api, centralApi } from "../../config/apiConfig"
import { centralApiHeaderObj, getLanguage, getUserToken } from "../../utils"
import { generateImageURL } from "../OSS/minioAPI"
const getPopularCategories = async (customParams) => {
    const reqParams = customParams && customParams.page && customParams.pagination_size ? customParams : { page: 1, pagination_size: 6 }
    const response = await api.get('/categories/guests', {
        headers: { Lang: getLanguage() },
        params: reqParams
    })
    return await Object.values(response.data.data)
}
const getAllCategories = async ()=>{
    const response = await api.get('/categories/guests',{
        headers: { Lang: getLanguage() },
    })
    return Object.values(response.data.data)
}
const getCountryInfoToSignup = async (countryName) => {
    const response = await centralApi.get('/countries', {
        params: {
            page: 1,
            pagination_size: 250,
            name: countryName
        },
        headers: centralApiHeaderObj()
    })
    return response.data.data.entities
}

const getValidCountriesToSignupDetail = async () => {
    let countries = []
    try {
        countries = await getCountryInfoToSignup()

    } catch (error) {
        // break
    }
    return countries
}
const getSingleCountryInfo = async (name) => {
    const response = await centralApi.get('/countries', {
        params: {
            name: name,
            page: 1
        },
        headers: centralApiHeaderObj()
    })
    return response.data.data.entities[0]
}
const getUserIdentifier = async () => {
    const response = await api.get('/users/profile', {
        headers: {
            Authorization: 'Bearer ' + getUserToken(),
            Lang: getLanguage()
        }
    })
    return response.data.data.email || response.data.data.country_code + ' ' + response.data.data.mobile
}
const getFeaturedJobs = async () => {
    const response = await api.get('/jobs/offers/guests', {
        headers:{
            Lang:getLanguage()
        },
        params: {
            page: 1,
            pagination_size: 6
        }
    })
    const { data: { data } } = response
    return data

}
const getExperiences = async () => {
    const response = await api.get('/experiences/guests', {
        headers:{
            Lang:getLanguage()
        },
        params: {
            page: 1,
            pagination_size: 6
        }
    })
    const { data: { data:{entities} } } = response
    return entities
}
const getPartners = async () =>{
    const response = await api.get('/partners/guests', {
        headers:{
            Lang:getLanguage()
        },
        params: {
            page: 1,
            pagination_size: 6
        },

    })
    const { data: { data :{entities} } } = response
    const fullDetailData = Promise.all( entities.map(async(partner)=>({...partner,logo:await generateImageURL('jobhunt',Object.values(partner.logo)[0] )})))
    
    return fullDetailData
}
const getBlogs = async (params) =>{
    const response = await api.get('blogs/guests',{
        headers:{
            Lang:getLanguage()
        },
        params: params || {
            page: 1,
            pagination_size: 3
        },
    })
    const { data: { data :{entities} } } = response
    const fullDetailData = Promise.all( entities.map(async(blog)=>({...blog,image:await generateImageURL('jobhunt',Object.values(blog.medias)[0] )})))
    return fullDetailData
}
const getCategoryDetailById = async (id) =>{
    const response = await api.get(`/categories/guests/${id}`,{
        headers:{
            Lang:getLanguage()
        }
    })
    return response.data.data.title
}
export {
    getPopularCategories,
    getAllCategories,
    getValidCountriesToSignupDetail,
    getUserIdentifier,
    getSingleCountryInfo,
    getFeaturedJobs,
    getExperiences,
    getPartners,
    getBlogs,
    getCategoryDetailById
}