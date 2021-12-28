const getServiceId = () => {
	return window.sessionStorage.getItem('serviceId')
}
const getLanguage = () => {
	return window.sessionStorage.getItem('Lang') || 'en'
}
const storeToken = (token) => {
	window.sessionStorage.setItem('token', token)
}
const getToken = () => {
	return 'Bearer ' + window.sessionStorage.getItem('token')
}
const storeUsertoken = () => {
	localStorage.setItem('userToken', window.sessionStorage.getItem('token'))
}

const getUserToken = () => {
	return localStorage.getItem('userToken')
}
const removeTokens = () => {
	localStorage.removeItem('userToken')
	window.sessionStorage.removeItem('token')
}
const centralApiHeaderObj = () => {
	return {
		'Service-ID': getServiceId(),
		Lang: getLanguage(),
	}
}
const capitalizeFirstLetter = (word) => {
	return word[0].toUpperCase() + word.substr(1)
}

const storeUser = (user) => {
	return window.sessionStorage.setItem('user', user)
}

const getUser = () => {
	return window.sessionStorage.getItem('user') || null
}

export {
	getServiceId,
	getLanguage,
	storeToken,
	getToken,
	centralApiHeaderObj,
	storeUsertoken,
	getUserToken,
	capitalizeFirstLetter,
	storeUser,
	getUser,
	removeTokens,
}
