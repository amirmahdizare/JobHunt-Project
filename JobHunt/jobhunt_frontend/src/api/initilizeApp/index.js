import axios from "axios"
const storeServiceIdAndDefineLanguage = async (language) =>{  
    var config ={
        method:'get',
        url:`${process.env.REACT_APP_CENTRAL_API_ENDPOINT}/services`,
        headers:{
            'Lang':language
        }
    }
    const response= await axios(config)
    const serviceId = response.data.data.filter(item => item.name=='jobHunt')[0].id;
    localStorage.setItem('serviceId',serviceId)
    localStorage.setItem('Lang',language)
}
export { storeServiceIdAndDefineLanguage}