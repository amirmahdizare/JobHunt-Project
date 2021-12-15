import { centralApi } from "../../../../config/apiConfig";
import { centralApiHeaderObj, storeToken } from "../../../../utils";

const _requestVerifyCode=async ({identifier,country_code}) =>{
    var data = new FormData();
    data.append('identifier', identifier);
    data.append('country_code', country_code);
    try {
        var response = await centralApi.post('/login', data, {
          headers: centralApiHeaderObj(),
          params:{ident_kind:'mobile'}
        })
        
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
    if (response.status == 200) {
        storeToken(await response.data.data.token)
        return Promise.resolve(response.data.data)
    }
}
export {_requestVerifyCode}