import {BaseApiService} from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL_V1

class CartService extends BaseApiService {
	constructor() {
		super()
	}

	getAll () {
		const url = `${baseUrl}/cart`;
		return this.sendGetRequest(url)
	}

    getByUser (data) {
		const url = `${baseUrl}/cart/user`;
		return this.sendPostRequest(url, data)
	}

	create (data) {
		const url = `${baseUrl}/cart/`;
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/cart/${id}`;
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/cart/${data.id}/`;
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/cart/${id}`;
		return this.sendDeleteRequest(url)
	}
}

export const cartService = new CartService()