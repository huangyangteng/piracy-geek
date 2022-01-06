import { USER_MU } from '../mutation-types'

const state = {
    userInfo: {
        id: '',
        userName: ''
    },
    jwt: ''
}

const getters = {
    isLogin: state => {
        if (state.userInfo.id) {
            return true
        } else {
            return false
        }
    },
    userName: state => state.userInfo.userName,
    userId: state => state.userInfo.id
}

const actions = {
    login({ commit }, userInfo) {
        commit(USER_MU.SET_USER, userInfo)
        commit(USER_MU.UPDATE_JWT, userInfo.jwt)
    },
    logout({ commit }) {
        commit(USER_MU.LOGOUT)
    },
    updateJWT({ commit }, newJWT) {
        commit(USER_MU.UPDATE_JWT, newJWT)
    }
}

const mutations = {
    [USER_MU.SET_USER](state, userInfo) {
        state.userInfo = {
            ...state.userInfo,
            ...userInfo
        }
    },
    [USER_MU.LOGOUT](state) {
        state.userInfo = {}
        state.jwt = ''
    },
    [USER_MU.UPDATE_JWT](state, jwt) {
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
