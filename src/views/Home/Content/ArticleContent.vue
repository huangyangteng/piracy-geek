<template>
    <section
        class="article-wrapper"
        v-html="articleContent"
        ref="articalWrapper"
    ></section>
</template>
<script>
import { Loading } from 'element-ui'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { getAriticleSrcById } from '../../../tools/column-tools'
import { uid } from '../../../tools/index'
import axios from 'axios'
const CancelToken = axios.CancelToken
let cancel
export default {
    data() {
        return {
            articleContent: '',
            loading: true,
            loadingInstance: null
        }
    },
    computed: {
        ...mapState('column', ['curArticleId']),
        ...mapGetters('column', [
            'curContents',
            'curColumnTitle',
            'curArticleTitle'
        ])
    },
    methods: {
        ...mapMutations('lastRead', ['setLastColumn', 'setLastArticle']),
        async handlerArticle(src, top, id) {
            // 每次发送新的请求之前，取消上一次的请求

            this.showLoading()
            src = src.replace('./', '')
            let reqUrl = window.location.origin + '/api/' + src
            if (location.hostname == 'localhost') {
                //测试环境
                reqUrl = window.location.origin + '/api/api/' + src
            }
            if (typeof cancel == 'function') {
                cancel()
            }
            let res = await axios.get(reqUrl, {
                cancelToken: new CancelToken(c => (cancel = c))
            })

            if (res.status !== 200) {
                return
            }
            this.articleContent =
                '<div class="hightlight-oprate"> <div class="hight-op-item delete">取消高亮</div> <div class="hight-op-item note">笔记</div> <div class="hight-op-item copy">复制</div> </div>' +
                this.filterWaterMark(res.data)
            this.saveHistory()
            this.hideLoading()
            this.$nextTick(() => {
                this.generateOutline()

                this.polyfillPage()

                document.querySelector('.article-wrapper').scrollTop = top
                this.setTitle()
                this.loadHightLight(id)
                this.bindEvent()
            })
        },
        loadHightLight(id) {
            let lastHightLight = this.$store.getters[
                'lastRead/getLastHightLight'
            ](id)
            window.hltr.deserializeHighlights(lastHightLight)
        },
        saveHightLight(id) {
            let savedHightLight = window.hltr.serializeHighlights()
            if (savedHightLight.length == 0) return
            this.$store.commit('lastRead/saveHightLight', {
                id: id,
                content: savedHightLight
            })
        },
        filterWaterMark(content) {
            //去除水印
            return content
                .replace('<p class="x">更多课程请加QQ群170701297</p>', '')
                .replace(
                    '<p class="x">所有最新极客时间课程请加QQ群170701297</p>',
                    ''
                )
                .replace(/<script.*>(.*\n)*<\/script>/gim, '')
        },
        generateOutline() {
            //生成大纲视图数据
            let wrapper = document.querySelector('.article-wrapper')
            let childrens = wrapper.getElementsByTagName('*')
            let treeArray = []

            for (let i = 0; i < childrens.length - 1; i++) {
                let nodeName = childrens[i].nodeName
                if (nodeName == 'H1' || nodeName == 'H2' || nodeName == 'H3') {
                    childrens[i].id = uid()
                    treeArray.push({
                        id: childrens[i].id,
                        name: childrens[i].innerText,
                        tag: childrens[i].nodeName,
                        top: childrens[i].offsetTop
                    })
                }
            }
            this.$store.commit('column/setOutline', treeArray)
        },
        setTitle() {
            document.title = this.curArticleTitle + '—' + this.curColumnTitle
        },
        saveHistory() {
            if (this.$route.params.column) {
                this.setLastColumn(this.$route.params.column)
                this.setLastArticle({
                    column: this.$route.params.column,
                    article: this.$route.params.article
                })
            }
        },
        polyfillPage() {
            let arr = document.querySelectorAll('._50pDbNcP_0')
            if (arr.length == 0) return
            let nav = null
            if (arr.length > 1) {
                nav = arr[arr.length - 1]
            } else {
                nav = arr[0]
            }
            try {
                nav.previousElementSibling.remove()
            } catch (error) {
                console.log('polyfillPage error', error)
            }
            let navDom = document.querySelector('._31dn84GH_0')
            console.log(
                '🚀 ~ file: ArticleContent.vue ~ line 141 ~ polyfillPage ~ navDom',
                navDom
            )
            if (navDom) {
                navDom.remove()
            }
        },
        showLoading() {
            let app = document.getElementById('app')
            let wrapper = document.querySelector('.article-wrapper')
            let target = app ? app : wrapper
            this.loadingInstance = Loading.service({
                target: target,
                fullscreen: false,
                text: '拼命加载中...'
            })
        },
        hideLoading() {
            this.loadingInstance.close()
        },
        bindEvent() {
            //绑定事件
            // let copyBtnDoms = document.querySelectorAll('.richcontent-pre-copy')
            document.addEventListener('click', e => {
                if (e.target.className == 'richcontent-pre-copy') {
                    let code = e.target.previousElementSibling
                    console.log('bindEvent -> code', code)
                    // 从code中提取代码
                }
            })
        }
    },
    watch: {
        curArticleId: {
            immediate: true,
            handler(id, oldId) {
                if (oldId) {
                    this.saveHightLight(oldId)
                }
                let src = getAriticleSrcById(this.curContents, id)
                let top = this.$store.getters['lastRead/getLastReadPosition'](
                    id
                )

                if (!src) return
                this.$nextTick(() => {
                    this.handlerArticle(src, top, id)
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.article-wrapper {
    padding: 80px 40px;
    overflow-y: auto;
    box-sizing: border-box;
    height: 100%;
    position: relative;
}
.article-wrapper #app {
}
</style>
<style lang="scss">
._3ADRghFH_0 {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
    font-weight: 400;
    color: #353535;
    line-height: 1.76;
    white-space: normal;
    word-break: normal;
    font-size: 17px;
    -webkit-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
    img {
        width: 100%;
    }
    h1 {
        font-size: 21px;
    }
}
._2c4hPkl9 > div > div {
    margin: 30px 0;
}
._1qhD3bdE_0 img {
    width: 20px;
}
</style>
