import { centralApi } from "../../../../config/apiConfig"
import {  storeToken ,centralApiHeaderObj} from "../../../../utils"
const _signup = async function (ident_kind, identifier, password, role_id, country_code) {
    if (ident_kind == 'mobile') {
        var userData = new FormData()
        userData.append('mobile', identifier)
        userData.append('password', password)
        userData.append('country_code', country_code)
        userData.append('role_id', role_id)
    }
    else if (ident_kind == 'email') {
        var userData = new FormData()
        userData.append('email', identifier)
        userData.append('password', password)
        userData.append('role_id', role_id)
    }
    const response = await centralApi.post(`/signup?ident_kind=${ident_kind}`, userData, {
        headers: {
            'ident_kind': ident_kind,
            ...centralApiHeaderObj()
        }
    })
    if (response.status == '200') {
        storeToken(await response.data)
        return true
    }
    else {
        throw Error('Something Went Wrong')
    }
}

export { _signup }