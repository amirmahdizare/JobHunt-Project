import { api, centralApi } from "../../config/apiConfig"
import { centralApiHeaderObj, getLanguage } from "../../utils"
import { countriesToSignUpConfig } from "../../config/countriesToSignUpConfig"
import { generateImageURL } from "../OSS/minioAPI"
const getPopularCategories = async (customParams) => {
    const reqParams = customParams && customParams.page && customParams.pagination_size ? customParams : { page: 1, pagination_size: 6 }
    const response = await api.get('/categories/guests', {
        headers: { Lang: getLanguage() },
        params: reqParams
    })
    return await Object.values(response.data.data)
}

const getSingleCountryInfoToSignup = async (countryName) => {
    const response = await centralApi.get('/countries', {
        params: {
            page: 1,
            pagination_size: 3,
            name: countryName
        },
        headers: centralApiHeaderObj()
    })

    return response.data.data.entities[0]
}

const getValidCountriesToSignupDetail = async () => {
    const pureCountryDetail = await Promise.all(countriesToSignUpConfig.map(async(country) => {
        try {
            const countryDetail = await getSingleCountryInfoToSignup(country)
            return countryDetail

        } catch (error) {
            // break
        }
    }))
    const FullCountryDetail = await Promise.all(pureCountryDetail.map(async(country) => {
        try {
            const flagIcon = await generateImageURL(country['flag'][country.id]['path'])
            return { ...country, 'flagIcon': flagIcon }
        } catch (error) {
            //break
        }
    }
    ))
    console.log(FullCountryDetail)
    return FullCountryDetail
}
export { getPopularCategories, getValidCountriesToSignupDetail }