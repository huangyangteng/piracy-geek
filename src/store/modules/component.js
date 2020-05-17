const state = {
    picturePreview: {
        show: false,
        width: '30%',
        src:
            'https://static001.geekbang.org/resource/image/46/84/4664e7f29ac02da1d451f23986ff9f84.jpg'
    }
}

const getters = {}

const actions = {}

const mutations = {
    updatePicturePreview(state, obj) {
        state.picturePreview = Object.assign(state.picturePreview, obj)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
