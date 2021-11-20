import { api } from "../../config/apiConfig"
import { getLanguage, getToken } from "../../utils"

const getCompany = async () => {
    const response = await api.get('/companies/employer', {
        headers: {
            Lang: getLanguage(),
            Authorization: getToken()
        },
        params: {
            page: 1,
        }
    })
    return response.data.data.entities
}
const storeCompany = async (dataObj) => {
    const data = new FormData()
    for (let item in dataObj) {
        if (dataObj[item])
        data.append(`${item}`, dataObj[item])
    }
    try {
        const response = await api.post('/companies/employer', data, {
            headers: {
                Authorization: getToken(),
                Lang: getLanguage()
            }
        })
        if (response.statusText == "ok")
            return Promise.resolve(response.data.data)
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
}
const deleteCompany = async (id) => {
    try {
        const response = await api.delete(`/companies/employer/${id}`, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            }
        })
        if (response.status == '200')
            return Promise.resolve()

    } catch (error) {
        return Promise.reject()
    }
}
const updateCompany = async (dataObj) => {
    const data = new FormData()
    for (let item in dataObj) {
            data.append(`${item}`, dataObj[item])
    }
    try {
        const response = await api.post(`/companies/employer/${dataObj.id}/update`, data, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            }
        })
        if (response.statusText == "ok")
            return Promise.resolve(response.data.data)
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }

}
export { getCompany, deleteCompany, storeCompany, updateCompany }