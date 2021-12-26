import { api } from "../../config/apiConfig"
import { getLanguage, getToken } from "../../utils"

const getCompany = async () => {
    try {
        const response = await api.get('/companies/employer', {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            },
            params: {
                page: 1,
            }
        })
        return Promise.resolve(response.data?.data)

    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
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

const deleteCompany = async ({id}) => {
    try {
        const response = await api.delete(`/companies/employer/${id}`, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            }
        })
        if (response.status == '200')
            return Promise.resolve(true)

    } catch (error) {
        return Promise.reject(false)
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

const postJob = async (dataObj) => {
    const data = JSON.stringify(dataObj)
    try {
        const response = await api.post('/jobs/offers/employer', data, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken(),
                'Content-Type': 'application/json'
            }
        })
        if (response.statusText == "ok")
            return Promise.resolve(response.data.data.id)
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }

}

const updateJob = async (dataObj) => {
    const data = JSON.stringify(dataObj)
    try {
        const {id} = dataObj
        const response = await api.put(`/jobs/offers/employer/${id}`, data, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken(),
                'Content-Type': 'application/json'

            }
        })
        if (response.statusText == "ok")
            return Promise.resolve()
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
}

const deleteJob = async ({id}) => {
    try {
        const response = await api.delete(`/jobs/offers/employer/${id}`, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            }
        })
        if (response.data.code == "200")
            return Promise.resolve(true)
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }

}

const getActivePackage = async ({ id }) => {
    try {
        const response = await api.get('/packages/employers/' + id, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            }
        })
        if (response.data.code == "200") {
            console.log(response.data)
            return Promise.resolve(response.data.data)
        }
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
}

const getSentResumes = async (job_offer_id) => {
    const response = await api.get(`/candidate-apply/employer/${job_offer_id}`, {
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

const getSingleSentResume = async (job_offer_id, id) => {
    const response = await api.get(`/candidate-apply/employer/${job_offer_id}/${id}`, {
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

const UpdateSentResumeStatus = async (job_offer_id, id, status) => {
    try {
        const response = await api.put(`/candidate-apply/employer/${job_offer_id}/${id}`, '', {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            },
            params: {
                status: status
            }
        })
        if (response.statusText == "ok")
            return Promise.resolve()
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
}
const postComment = async (info, id, parent_id) => {
    const data = parent_id ? { ...info, entity: "blogs", parent_id } : { ...info, entity: "blogs" }

    try {
        const response = await api.post(`/comments/users/${id}`, data, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            },


        })
        return response.data

    } catch (error) {
        return error.response.data.message
    }

}

const getCompanyJobs = async ({ page, pagination_size ,status = null }) => {
    try {
        const response = await api.get(`/jobs/offers/employer`, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            },
            params: {
                page, pagination_size ,status
            }

        })
        const  { data: { data: { entities ,  number_of_entities ,number_of_pages} }  } = response
        return { entities,number_of_entities,number_of_pages}


    } catch (error) {
        return error.response.data.message
    }
}
const getCompanyJob = async({id}) =>{
    try {
        const response = await api.get(`/jobs/offers/employer/${id}`, {
            headers: {
                Lang: getLanguage(),
                Authorization: getToken()
            },


        })
        return response.data.data

    } catch (error) {
        return error.response.data.message
    }
}
export {
    getCompany, deleteCompany,
    storeCompany, updateCompany,
    postJob, updateJob, deleteJob,
    getActivePackage, getSentResumes,
    getSingleSentResume, UpdateSentResumeStatus,
    postComment, getCompanyJobs,getCompanyJob
}