const state = {
    lastColumnId: '',
    lastArticleList: [],
    lastReadPositionList: [],
    lastHightLight: {}
}

const getters = {
    getLastArticleId(state) {
        return column => {
            let curIndex = state.lastArticleList.findIndex(
                item => item.column == column
            )
            if (curIndex == -1) {
                return null
            } else {
                return state.lastArticleList[curIndex].article
            }
        }
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
    },
    getLastHightLight(state) {
        return id => {
            return state.lastHightLight[id]
        }
    }
}

const actions = {}

const mutations = {
    saveHightLight(state, obj) {
        state.lastHightLight[obj.id] = obj.content
    },
    setLastColumn(state, columnId) {
        state.lastColumnId = columnId
    },
    setLastArticle(state, params) {
        let { column, article } = params
        let curIndex = state.lastArticleList.findIndex(
            item => item.column == column
        )
        let cur = { column, article }
        if (curIndex != -1) {
            //已存在
            state.lastArticleList.splice(curIndex, 1, cur)
        } else {
            state.lastArticleList.push(cur)
        }
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
