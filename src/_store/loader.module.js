const state = {
    loading: false,
    type: 'loader',
}

const actions = {
    setLoading ({ commit }, value) {
        commit('SET_LOADER', value)
    },
    setType ({ commit }, value) {
        commit('SET_TYPE', value)
    }
}

const mutations = {
    SET_LOADER (state, value) {
        state.loading = value
    },
    SET_TYPE (state, data) {
        state.type = data.value
    }
}

const getters = {
    loading ({ loading }) {
        return loading
    },
    type ({ type }) {
        return type
    },
}

export const loader = {
    namespaced: true,
    actions,
    state,
    mutations,
    getters
}