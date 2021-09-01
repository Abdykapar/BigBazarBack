import { cartService } from '@/_services/cart.service'

const state = {
    products: []
}

const actions = {
    getProducts ({ commit }, data) {
        return cartService.getByUser(data).then(res => {
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
}

export const cart = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}