import { api } from '../../config/apiConfig'
import { getLanguage, getToken } from '../../utils'

export const getProfileData = async function () {
	const response = await api.get('/users/profile', {
		headers: {
			Lang: getLanguage(),
			Authorization: getToken(),
		},
	})
	console.log(response.data.data)
	return response.data.data || null
}
