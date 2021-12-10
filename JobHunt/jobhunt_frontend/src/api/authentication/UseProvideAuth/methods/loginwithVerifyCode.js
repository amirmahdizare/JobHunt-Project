import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, getToken, storeUser } from "../../../../utils"
import { _getRoll } from "./getRoll"

const _loginwithVerifyCode = async (setUser,{verifyCode}) =>{
    try {
        const response = await centralApi.get(`/code/${verifyCode}/verify`, {
            headers: {
                Authorization: getToken(),
                ...centralApiHeaderObj()
            }
        })
        if (response.status == '200') {
            const role = await _getRoll()
            storeUser(role)
            setUser(role)
            return Promise.resolve(response.data.data)
        }
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
}

export {_loginwithVerifyCode}