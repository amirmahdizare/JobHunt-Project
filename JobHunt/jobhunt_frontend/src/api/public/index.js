import { api, centralApi } from "../../config/apiConfig"
import { centralApiHeaderObj, getLanguage, getUserToken } from "../../utils"
const getPopularCategories = async (customParams) => {
    const reqParams = customParams && customParams.page && customParams.pagination_size ? customParams : { page: 1, pagination_size: 6 }
    const response = await api.get('/categories/guests', {
        headers: { Lang: getLanguage() },
        params: reqParams
    })
    return await Object.values(response.data.data)
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
    let countries= []
        try {
            countries  = await getCountryInfoToSignup()

        } catch (error) {
            // break
        }
    return countries
}
const getSingleCountryInfo = async (name) =>{
    const response  = await  centralApi.get('/countries',{
        params:{
            name:name,
            page:1
        },
        headers:centralApiHeaderObj()
    })
 return response.data.data.entities[0]
}
const getUserIdentifier =async () =>{
    const response = await api.get('/users/profile',{
        headers:{
            Authorization:'Bearer '+getUserToken(),
            Lang:getLanguage()
        }
    })
    return response.data.data.email || response.data.data.country_code + ' ' + response.data.data.mobile
}
export { getPopularCategories, getValidCountriesToSignupDetail,getUserIdentifier,getSingleCountryInfo }