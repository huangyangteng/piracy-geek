import Vue from 'vue'
import Vuex from 'vuex'
import vuexStore from 'vuex-persistedstate'
import column from './modules/column'
import lastRead from './modules/last-read'
import component from './modules/component'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        lastRead,
        column,
        component,
        user
    },
    plugins: [vuexStore({ key: 'gk-read' })]
})
