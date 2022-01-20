import { api, centralApi } from "../../config/apiConfig"

const generateImageURL = async (source, id) => {
    if (source == 'jobhunt') {
        try {
            const response = await api.get('/file', {
                params: {
                    path: id
                }
            })
            const { data: { data } } = response
            return Promise.resolve(data) 
            
        } catch (error) {
            //error
        }
    }
    else if (source == 'central'){
        try {
            const response = await centralApi.get('/file', {
                params: {
                    path: id
                }
            })
            const { data: { data } } = response
            return Promise.resolve(data) 
            
        } catch (error) {
            //error
        }
    }

}
export { generateImageURL }
