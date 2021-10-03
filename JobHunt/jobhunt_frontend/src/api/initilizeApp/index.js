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
    window.sessionStorage.setItem('serviceId',serviceId)
    window.sessionStorage.setItem('Lang',language)
    // if()
}
export { storeServiceIdAndDefineLanguage}