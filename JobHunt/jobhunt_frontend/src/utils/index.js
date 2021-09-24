const getServiceId =() =>{
    return localStorage.getItem('serviceId')
}
const getLanguage = () =>{
    return localStorage.getItem('Lang')
}
export { getServiceId,getLanguage}