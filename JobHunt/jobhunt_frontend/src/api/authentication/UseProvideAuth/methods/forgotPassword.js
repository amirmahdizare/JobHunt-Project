import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, storeToken } from "../../../../utils";
const _forgotPassword= async function (ident_kind, identifier, country_code)  {
    if (ident_kind == 'mobile') {
        var data = new FormData();
        data.append('mobile', identifier);
        data.append('country_code', country_code);
    }
    else if (ident_kind == 'email') {
        var data = new FormData();
        data.append('email', identifier);
    }
    const response = await centralApi.post(`/password/forgot?ident_kind=${ident_kind}`, data, {
        headers: centralApiHeaderObj()
    })
    if (response.status == '200') {
        storeToken(await response.data)
        return true
    }
    else throw Error('There is no user with this data')
}
export {_forgotPassword}