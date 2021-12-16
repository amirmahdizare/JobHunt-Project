import axios from "axios"
const storeServiceIdAndDefineLanguage = async (language) =>{  
    var config ={
        method:'get',
        url:`${process.env.REACT_APP_CENTRAL_API_ENDPOINT}/services`,
        headers:{
            'Lang':language
        }
    }
    try {
        const response= await axios(config)
        const serviceId = response.data.data.filter(item => item.name=='jobHunt')[0].id;
        window.sessionStorage.setItem('Lang',language)
        window.sessionStorage.setItem('serviceId',serviceId)
        return true
    } catch (error) {
        return false
    }
    
}
const shareStorage = () =>{
    window.addEventListener('storage', function (event) {
        if (event.key == 'getSessionStorage') {
            // Some tab asked for the sessionStorage -> send it
            localStorage.setItem('sessionStorage', JSON.stringify(window.sessionStorage));
            localStorage.removeItem('sessionStorage');
        } else if (event.key == 'sessionStorage' && !window.sessionStorage.length) {
            // sessionStorage is empty -> fill it
            var data = JSON.parse(event.newValue)
            // value;
            for (const key in data) {
                window.sessionStorage.setItem(key, data[key]);
            }

        }
    });
    if (window.sessionStorage.length < 3) {
        // Ask other tabs for session storage
        localStorage.setItem('getSessionStorage', Date.now());
    };
}
export { storeServiceIdAndDefineLanguage,shareStorage}