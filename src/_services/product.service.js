import {BaseApiService} from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL_V1

class ProductService extends BaseApiService {
	constructor() {
		super()
	}

	getAll () {
		const url = `${baseUrl}/products`;
		return this.sendGetRequest(url)
	}

	create (data) {
        const fd = new FormData()
        for (let [key, value] of Object.entries(data)){
            fd.append(key, value)
        }
		const url = `${baseUrl}/products/`;
		return this.sendPostRequest(url, fd)
	}

	getById (id) {
		const url = `${baseUrl}/products/${id}`;
		return this.sendGetRequest(url)
	}

	update (data) {
        const fd = new FormData()
        for (let [key, value] of Object.entries(data)){
            fd.append(key, value)
        }
		const url = `${baseUrl}/products/${data.id}/`;
		return this.sendPutRequest(url, fd)
	}

	delete (id) {
		const url = `${baseUrl}/products/${id}`;
		return this.sendDeleteRequest(url)
	}
}

export const productService = new ProductService()