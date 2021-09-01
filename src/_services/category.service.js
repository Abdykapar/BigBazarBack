import {BaseApiService} from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL_V1

class CategoryService extends BaseApiService {
	constructor() {
		super()
	}

	getAll () {
		const url = `${baseUrl}/categories`;
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/categories/`;
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/categories/${id}`;
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/categories/${data.id}/`;
		return this.sendPutRequest(url, data)
	}

	getFile (name) {
		const url = `${baseUrl}/categories/file/${name}/`;
		return fetch(url)
	}

	delete (id) {
		const url = `${baseUrl}/categories/${id}`;
		return this.sendDeleteRequest(url)
	}
}

export const categoryService = new CategoryService()