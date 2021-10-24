import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, getToken } from "../../../../utils"
import { _getRoll } from "./getRoll"
const _verifyCode = async function (setUser, verifyCode) {
    try {
        const response = await centralApi.get(`/code/${verifyCode}/verify`, {
            headers: {
                Authorization: getToken(),
                ...centralApiHeaderObj()
            }
        })
        if (response.status == '200') {
            return true
        }
    } catch (error) {
        return Promise.reject(error.response.data)
    }
}
export { _verifyCode }