import { api } from '../../config/apiConfig'
import { getLanguage, getToken } from '../../utils'

export const getProfileData = async function () {
	const response = await api.get('/users/profile', {
		headers: {
			Lang: getLanguage(),
			Authorization: getToken(),
		},
	})
	return response.data.data || null
}

export const updateProfile = async (dataObj) => {
	const data = new FormData()
	for (let item in dataObj) {
		if (dataObj[item]) data.append(`${item}`, dataObj[item])
	}
	try {
		const response = await api.post('/users/profile', data, {
			headers: {
				Authorization: getToken(),
				Lang: getLanguage(),
			},
		})
		if (response.statusText === 'ok') return response.data.data
	} catch (error) {
		return error.response.data.message
	}
}
