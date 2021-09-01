import { userService } from '@/_services/user.service'
import router from '@/router'

const user = JSON.parse(localStorage.getItem('user'))

const state = {
    user: user ? user : {},
}

const actions = {
    login ({ commit, dispatch }, data) {
        userService.login(data).then(async res => {
            localStorage.setItem('user', JSON.stringify(res))
            commit('SET_USER', res)
            if (res.user.username === 'admin')
                router.push('/admin')
            else router.push('/cart')
        }).catch(err => {
            console.log(err)
            dispatch('alert/setAlert', { message: err, type: 'e' }, { root: true })
        })
    },
    logout ({ commit }) {
        userService.logout()
        commit('REMOVE_USER')
    },
}

const mutations = {
    SET_USER (state, data) {
        state.user = data
    },
    REMOVE_USER (state) {
        state.user = {}
    },
}

const getters = {}

export const account = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
