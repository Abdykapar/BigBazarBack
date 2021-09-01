import { wishListService } from '@/_services/wishList.service'

const state = {
    products: []
}

const actions = {
    getWishProducts ({ commit }, data) {
        return wishListService.getByUser(data).then(res => {
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

export const wishList = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}