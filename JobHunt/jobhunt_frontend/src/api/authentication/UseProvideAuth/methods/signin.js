import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, storeToken } from "../../../../utils";
import { _getRoll } from "./getRoll";
const _signin = async function (setUser, { identifier, password, user }) {
  var data = new FormData();
  data.append('identifier', identifier);
  data.append('password', password);
  const response = await centralApi.post('/login', data, {
    headers: centralApiHeaderObj()
  })
  if (response.status == 200) {
    storeToken(await response.data)
    const role = await _getRoll()
    if (!role)
      return Promise.reject(new Error('unAuthorized'))
    else if (!(role == user))
      return Promise.reject(new Error('userNotFound'))
    else {
      {
        setUser(role)
        return Promise.resolve()
      }
    }
  }
  else {
    return Promise.reject(new Error('userNotFound'))
  }

}
export { _signin }