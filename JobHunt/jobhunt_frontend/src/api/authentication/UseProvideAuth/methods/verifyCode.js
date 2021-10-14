import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, getToken } from "../../../../utils"
import { _getRoll } from "./getRoll"
const _verifyCode = async function (setUser,verifyCode)  {
    const response = await centralApi.get(`/code/${verifyCode}/verify`, {
        headers: {
            Authorization: getToken(),
           ...centralApiHeaderObj()
        }
    })
    if (response.status == '200') {
        setUser(_getRoll())
        return true
    }
    else
        throw Error('Verify Code Is Incorrect Or Expired,Try Again')
}
export {_verifyCode}