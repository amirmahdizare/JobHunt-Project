import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, getToken } from "../../../../utils"
const _resetPassword = async function (current_password, password, password_confirmation) {
    var data = new FormData()
    data.append('current_password',current_password)
    data.append('password',password)
    data.append('password_confirmation',password_confirmation)
    const response = await centralApi.post('/password/reset',data,{
        headers:{
            Authorization:getToken(),
            ...centralApiHeaderObj()
        }
    })
    if(response.status=='200')
    return true 
    else{
        return Error('Something went wrong')
    }
}
export {_resetPassword}