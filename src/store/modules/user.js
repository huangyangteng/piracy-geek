import { USER } from '../mutation-types'

const state = {
    info: {},
    jwt: ''
}

const getters = {}

const actions = {
    login({ commit }, userInfo) {
        commit(USER.LOGIN, userInfo)
        commit(USER.UPDATE_JWT, userInfo.jwt)
    },
    logout({ commit }) {
        commit(USER.LOGOUT)
    },
    updateJWT({ commit }, newJWT) {
        commit(USER.UPDATE_JWT, newJWT)
    }
}

const mutations = {
    [USER.LOGIN](state, userInfo) {
        state.info = userInfo.data
    },
    [USER.LOGOUT](state) {
        state.info = {}
        state.jwt = ''
        localStorage.removeItem('vuex')
    },
    [USER.UPDATE_JWT](state, jwt) {
        state.jwt = jwt
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
