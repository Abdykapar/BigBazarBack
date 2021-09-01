import { handleResponse } from '@/_helpers/authHeader'

export const userService = {
	login ({ username, password }) {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		}
		return fetch(`${process.env.VUE_APP_BASE_URL}/login`, options).then(handleResponse)
	},
	logout () {
		localStorage.removeItem('user')
		location.reload(true)
	},
	register (user) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		}
		return fetch(`${process.env.VUE_APP_BASE_URL}/register`, requestOptions).then(handleResponse)
	},
}
