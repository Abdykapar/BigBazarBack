import {BaseApiService} from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL_V1

class WishListService extends BaseApiService {
	constructor() {
		super()
	}

	getAll () {
		const url = `${baseUrl}/wish-list`;
		return this.sendGetRequest(url)
	}

    getByUser (data) {
		const url = `${baseUrl}/wish-list/user`;
		return this.sendPostRequest(url, data)
	}

	create (data) {
		const url = `${baseUrl}/wish-list/`;
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/wish-list/${id}`;
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/wish-list/${data.id}/`;
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/wish-list/${id}`;
		return this.sendDeleteRequest(url)
	}
}

export const wishListService = new WishListService()