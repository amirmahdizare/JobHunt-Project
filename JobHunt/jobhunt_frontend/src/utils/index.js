const getServiceId = () => {
    // return localStorage.getItem('serviceId')
    return window.sessionStorage.getItem('serviceId')

}
const getLanguage = () => {
    return window.sessionStorage.getItem('Lang')
    // return localStorage.getItem('Lang')
}
const storeToken = (data) => {
    window.sessionStorage.setItem('token', data.data.token)
    // localStorage.setItem('token', data.data.token)
}
const getToken =() =>{
    // return 'Bearer '+localStorage.getItem('token')
    return 'Bearer '+window.sessionStorage.getItem('token')
}
// const deleteTokenfromLocalStorage = () =>{
//     localStorage.removeItem('')
// }
const storeUsertoken = () =>{
    localStorage.setItem('userToken', getToken())
}

const getUserToken= () =>{
    localStorage.getItem('userToken')
}
const centralApiHeaderObj = () => {
    return {
        'Service-ID':getServiceId(),
        'Lang':getLanguage()
    }
}
export { getServiceId, getLanguage,storeToken,getToken ,centralApiHeaderObj ,storeUsertoken,getUserToken}