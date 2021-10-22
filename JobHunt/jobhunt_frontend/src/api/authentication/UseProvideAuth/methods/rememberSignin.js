import { appUsersTypeConfig } from "../../../../config/appUsersTypeConfig"
import { getUserToken, storeToken, storeUser } from "../../../../utils"
import { _getRoll } from "./getRoll"

const _rememberSignin = async (setUser) => {
    storeToken(getUserToken())
    const role = await _getRoll()
    if (!role)
        return Promise.reject(new Error('unAuthorized'))
    else if (appUsersTypeConfig.indexOf(role)==-1)
        return Promise.reject(new Error('userNotFound'))
    else {
        {
            storeUser(role)
            setUser(role)
            return Promise.resolve()
        }
    }
}
export { _rememberSignin }