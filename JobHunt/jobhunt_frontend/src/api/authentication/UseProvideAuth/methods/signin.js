import { centralApi } from "../../../../config/apiConfig"
import { centralApiHeaderObj, storeToken, storeUser } from "../../../../utils";
import { _getRoll } from "./getRoll";

const _signin = async function (setUser, {country_code, identifier, password }) {
  var data = new FormData();
  data.append('identifier', identifier);
  data.append('password', password);
  data.append('country_code', country_code);
  try {
    
    const response = await centralApi.post('/login?ident_kind=mobile', data, {
      headers: centralApiHeaderObj()
    })
    
    if (response.status == 200) {
      storeToken(await response.data.data.token)
      const role = await _getRoll()
      storeUser(role)
      setUser(role)
      return Promise.resolve(response.data.data)
  
    }
  } catch (error) {
    return Promise.reject(error.response.data.message)
  }
}

export { _signin }