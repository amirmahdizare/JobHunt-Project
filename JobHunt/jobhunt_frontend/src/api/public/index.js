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

const getAllCategories = async () => {
    const response = await api.get('/categories/guests', {
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
        headers: {
            Lang: getLanguage()
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
        headers: {
            Lang: getLanguage()
        },
        params: {
            page: 1,
            pagination_size: 6
        }
    })
    const { data: { data: { entities } } } = response
    return entities
}

const getPartners = async () => {
    const response = await api.get('/partners/guests', {
        headers: {
            Lang: getLanguage()
        },
        params: {
            page: 1,
            pagination_size: 6
        },

    })
    const { data: { data: { entities } } } = response
    const fullDetailData = Promise.all(entities.map(async (partner) => ({ ...partner, logo: await generateImageURL('jobhunt', Object.values(partner.logo)[0]) })))

    return fullDetailData
}

const getBlogs = async (params) => {
    const response = await api.get('blogs/guests', {
        headers: {
            Lang: getLanguage()
        },
        params: params || {
            page: 1,
            pagination_size: 3
        },
    })
    const { data: { data: { entities } } } = response
    const fullDetailData = Promise.all(entities.map(async (blog) => ({ ...blog, image: await generateImageURL('jobhunt', Object.values(blog.medias)[0]) })))
    return fullDetailData
}
const getFAQs = async (customParams) => {
    const reqParams = customParams && customParams.page && customParams.pagination_size ? customParams : { page: 1, pagination_size: 6 }
    const response = await api.get('/faqs/guests', {
        headers: { Lang: getLanguage() },
        params: reqParams
    })
    return await Object.values(response.data.data)
}
const getTerms = async (customParams) => {
    const reqParams = customParams && customParams.page && customParams.pagination_size ? customParams : { page: 1, pagination_size: 6 }
    const response = await api.get('/terms/guests', {
        headers: { Lang: getLanguage() },
        params: reqParams
    })
    return await Object.values(response.data.data)
}

const getCategoryDetailById = async (id) => {
    const response = await api.get(`/categories/guests/${id}`, {
        headers: {
            Lang: getLanguage()
        }
    })
    return response.data.data.title
}

const getJobWorktimes = async (id) => {
    const response = await api.get(`/cooperation-kinds/guests?page=1`, {
        headers: {
            Lang: getLanguage()
        }
    })
    var result = []
    let times = response.data.data
    for (let item in times) {
        result.push({
            cooperation_kind_id: item,
            title: times[item]
        })
    }
    return result
}
const getAboutUsDescription = async () => {
    const response = await api.get(`/preambles/guests`, {
        headers: {
            Lang: getLanguage()
        }
    })

    const { data: { data } } = response
    const fullDetailData = { ...data, image: await generateImageURL('jobhunt', Object.values(data.media)[0]) }
    return fullDetailData
}

const getOverServices = async () => {
    const response = await api.get(`/services/guests?page=1`, {
        headers: {
            Lang: getLanguage()
        }
    })

    return response.data.data.entities
}

const getStatistics =async () =>{

    const getCount =async (endpoint) =>{
        const response = await api.get(endpoint, {
            headers: {
                Lang: getLanguage()
            }
        })
        return response.data.data.number_of_entities
    }
    
    try { 
        var jobsCount =await getCount('/jobs/offers/guests?page=1')
        var companiesCount =await getCount('/companies/guest?page=1')
        var usersCount = await getCount('/users/guests/counts?page=1')
    } catch (error) {
        return {}
    }

    return {jobsCount,companiesCount,usersCount }
}
const postContactUs = async (data) => {
    const response = await api.post('/contact-us/guests', data, {
        headers: { Lang: getLanguage() },
    })
    return await Object.values(response)
}
const getContactInfo =async () =>{
    try {
        const response = await api.get('/contact-infos/guests', {
            headers: { Lang: getLanguage() },
        })
        console.log(response.data)
        return response.data.data
        
    } catch (error) {
        return Promise.reject(new Error('No Info Found'))
    }
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
    getFAQs,
    getTerms,
    getCategoryDetailById,
    getJobWorktimes,
    getCountryInfoToSignup,
    getAboutUsDescription,
    getOverServices,
    getStatistics,
    postContactUs,
    getContactInfo
 
}
