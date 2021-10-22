import { api } from "../../../../config/apiConfig"
import { getLanguage } from "../../../../utils"
const getRollsDetail = async() =>{ 
    var response 
    try {
         response  = await  api.get('/roles/guests',{
            headers:{
                Lang:getLanguage()
            }
        })   
    } catch (error) {
        return null;
    }
    return response.data.data
}
export {getRollsDetail}