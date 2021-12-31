import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, storeToken } from "../../../../utils";
const _forgotPassword= async function ({ident_kind, mobile, country_code})  {
    if (ident_kind == 'mobile') {
        var data = new FormData();
        data.append('mobile', mobile);
        data.append('country_code', country_code);
    }
    // else if (ident_kind == 'email') {
    //     var data = new FormData();
    //     data.append('email', mobile);
    // }
    try {
        const response = await centralApi.post(`/password/forgot?ident_kind=${ident_kind}`, data, {
            headers: centralApiHeaderObj()
        })
        if (response.status == '200') {
            storeToken(await response.data.data.token)
            return Promise.resolve(true)
        }
        
    } catch (error) {
       return Promise.reject(error.response.data.message)
        
    }
}
export {_forgotPassword}