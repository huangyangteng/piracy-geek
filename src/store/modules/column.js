const state = {
    // 所有专栏列表
    columnList: [],
    // 当前专栏
    curColumn: {
        id: '',
        title: '',
        contents: []
    },
    //大纲
    outlineList: [],

    // 当前文章
    curArticleId: '',

    status: {
        navIsShow: true,
        toolbarIsShow: true
    }
}

const getters = {
    // 当前专栏信息
    curColumnId: state => state.curColumn.id,
    curColumnTitle: state => state.curColumn.title,
    curContents: state => state.curColumn.contents,
    curArticleTitle: (state, getters) => {
        let tmp = getters.curContents.map(item => item.subList)
        let list = tmp.reduce((prev, cur) => prev.concat(cur))
        try {
            return list.find(item => item.id == state.curArticleId).title
        } catch (error) {
            return ''
        }
    },
    // 显示状态
    isFold: state => !state.status.navIsShow,
    isFullScreen: state => {
        return !state.status.navIsShow && !state.status.toolbarIsShow
    }
}

const actions = {
    fullScreen({ commit }) {
        commit('toggleNavIsShow', false)
        commit('toggleToolBar', false)
    },
    notFullScreen({ commit }) {
        commit('toggleNavIsShow', true)
        commit('toggleToolBar', true)
    }
}

const mutations = {
    setColumnList(state, list) {
        state.columnList = list
    },
    updateColumn(state, column) {
        state.curColumn = Object.assign(state.curColumn, column)
    },
    updateArticleId(state, id) {
        state.curArticleId = id
    },
    toggleNavIsShow(state, truth) {
        state.status.navIsShow = truth
    },
    toggleToolBar(state, truth) {
        state.status.toolbarIsShow = truth
    },
    setOutline(state, list) {
        state.outlineList = list
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
