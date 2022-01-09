import { api } from "../../config/apiConfig"
import { getToken, getServiceId, getLanguage } from "../../utils";

const _applyJob = async function (jobId) {

  try {

    const response = await api.post(`/jobs/offers/candidates/apply/${jobId}`, '', {
      headers: {
        // "Service-ID": getServiceId(),
        "Lang": getLanguage(),
        "Authorization": getToken()
      }
    })

    if (response.status == 200) {
    
      return Promise.resolve(response.data.data)

    }
  } catch (error) {
    return Promise.reject(error.response.data.message)
  }
}

export { _applyJob }