import { centralApi } from "../../../../config/apiConfig"
import { storeToken, centralApiHeaderObj } from "../../../../utils"
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
    try {
        const response = await centralApi.post('/signup', userData, {
            headers: centralApiHeaderObj(),
            params: { 'ident_kind': ident_kind }
        })
        if (response.status == '200') {
            storeToken(await response.data.data.token)
            return true
        }
    } catch (error) {
        return Promise.reject(error.response.data)
    }
}

export { _signup }