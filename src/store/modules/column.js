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
        outlineIsShow: true
    }
}

const getters = {
    // 当前专栏信息
    curColumnId: state => state.curColumn.id,
    curColumnTitle: state => state.curColumn.title,
    curContents: state => state.curColumn.contents,
    // 显示状态
    isFold: state => !state.status.navIsShow
}

const actions = {}

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
