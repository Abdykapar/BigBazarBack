import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL_V1

class UsersService extends BaseApiService {
	constructor () {
		super()
	}

	getAll () {
		const url = `${baseUrl}/user`
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/user`
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/user/${id}`
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/user/${data.id}/`
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/user/${id}`
		return this.sendDeleteRequest(url)
	}
}

export const usersService = new UsersService()