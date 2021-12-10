import { centralApi } from "../../../../config/apiConfig";
import { centralApiHeaderObj, storeToken } from "../../../../utils";

const _requestVerifyCode=async ({identifier}) =>{
    var data = new FormData();
    data.append('identifier', identifier);
    try {
        var response = await centralApi.post('/login', data, {
          headers: centralApiHeaderObj()
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