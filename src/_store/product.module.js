import { productService } from '@/_services/product.service'

const state = {
    products: []
}

const actions = {
    getProducts ({ commit }) {
        return productService.getAll().then(res => {
            commit('SET_PRODUCT', res)
        }).catch(err => console.log(err))
    }
}

const mutations = {
    SET_PRODUCT(state, data) {
        state.products = data
    }
}

const getters = {
    products ({ products }) {
        return products
    },
    hotProducts ({ products }) {
        return products.slice(0,3)
    },
    hotDealProducts ({ products }) {
        return products.slice(3,10)
    },
    newProducts ({ products }) {
        return products.slice(10, 16)
    },
    trendProducts ({ products }) {
        return products.slice(-10)
    }
}

export const products = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}