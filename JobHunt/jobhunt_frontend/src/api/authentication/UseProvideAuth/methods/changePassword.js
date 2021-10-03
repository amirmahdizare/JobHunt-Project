import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, getToken } from "../../../../utils"
const _changePassword =async function (password,password_confirmation) {
    if(password_confirmation==password)
    throw  Error('password Confirmation is not Equal to password ')
    var data =new FormData()
    data.append('password',password)
    data.append('password_confirmation',password_confirmation)
    const response = await centralApi.post(`/password/change`,data,{
        headers:{
            Authorization:getToken(),
            ...centralApiHeaderObj()}
    })
    if(response.status=='200'){
        return true
    }
    else{
        return Error('Something Went Wrong,Try Again Later')
    }


}
export {_changePassword}