import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, getToken } from "../../../../utils"
const _changePassword = async function (password, password_confirmation) {
    if (password_confirmation != password)
         return Promise.reject({'message':{'password_confirmation':['Password Confirmation is not Equal to password ']}})
    var data = new FormData()
    data.append('password', password)
    data.append('password_confirmation', password_confirmation)
    try {
        const response = await centralApi.post('/password/change', data, {
            headers: {
                Authorization: getToken(),
                ...centralApiHeaderObj()
            }
        })
        if (response.status == '200') {
            return true
        }
    } catch (error) {
        return Promise.reject(error.response.data)
    }


}
export { _changePassword }