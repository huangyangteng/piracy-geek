const state = {
    lastColumnId: 'chongxueqianduan',
    lastArticleList: [],
    lastReadPositionList: []
}

const getters = {
    lastArticleId() {
        return 'sj1T7fCTN4kPErNu'
    },
    getLastReadPosition(state) {
        return article => {
            let curIndex = state.lastReadPositionList.findIndex(
                item => item.article == article
            )
            if (curIndex == -1) {
                return 0
            } else {
                return state.lastReadPositionList[curIndex].top
            }
        }
    }
}

const actions = {}

const mutations = {
    setLastColumn(state, columnId) {
        state.lastColumnId = columnId
    },
    setReadPosition(state, params) {
        let { article, top } = params
        let curIndex = state.lastReadPositionList.findIndex(
            item => item.article == article
        )
        let cur = { article, top }
        if (curIndex != -1) {
            //已存在
            state.lastReadPositionList.splice(curIndex, 1, cur)
        } else {
            state.lastReadPositionList.push(cur)
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
