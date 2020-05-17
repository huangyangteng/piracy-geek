const state = {
    lastColumnId: 'chongxueqianduan',
    lastArticleList: [],
    lastReadPositionList: []
}

const getters = {
    lastArticleId() {
        return 'sj1T7fCTN4kPErNu'
    }
}

const actions = {}

const mutations = {
    setLastColumn(state, columnId) {
        state.lastColumnId = columnId
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
