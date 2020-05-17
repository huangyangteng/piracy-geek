<template>
    <section class="read-wrapper">
        <ReadAside class="read-aside"></ReadAside>
        <section class="read-content">
            <ReadToolBar v-show="status.toolbarIsShow"></ReadToolBar>
            <ArticleContent></ArticleContent>
        </section>
        <i
            v-show="isFullScreen"
            @click="notFullScreen"
            class="el-icon-magic-stick exit-full"
        ></i>
        <PicturePreview></PicturePreview>
    </section>
</template>
<script>
import { COLUMN_API } from '../../api/column'
import ReadAside from './Aside/ReadAside'
import ReadToolBar from './Content/ReadToolBar'
import ArticleContent from './Content/ArticleContent'
import PicturePreview from './Modal/PicturePreview'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    components: {
        ReadAside,
        ReadToolBar,
        ArticleContent,
        PicturePreview
    },
    data() {
        return {
            curColumnId: ''
        }
    },
    computed: {
        ...mapState('lastRead', ['lastColumnId']),
        ...mapState('column', ['columnList', 'status']),
        ...mapGetters('lastRead', ['lastArticleId']),
        ...mapGetters('column', ['isFullScreen'])
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                if (!from) {
                    //新进入,获取所有的专栏列表
                    this.updateAll(to.params.column, to.params.article)
                } else {
                    // 如果是同一个专栏,只更新选中的文章
                    if (to.params.column === from.params.column) {
                        this.updateArticleId(to.params.article)
                    } else {
                        // 如果不是同一个专栏，更新专栏和文章
                        this.updateColumn(this.getColumnById(to.params.column))
                        this.updateArticleId(to.params.article)
                    }
                }
            }
        }
    },
    methods: {
        ...mapActions('column', ['notFullScreen']),
        ...mapMutations('column', [
            'setColumnList',
            'updateColumn',
            'updateArticleId'
        ]),
        ...mapMutations('lastRead', ['setReadPosition']),
        async updateAll(column, article) {
            await this.getAllColumn()
            this.updateColumn(this.getColumnById(column))
            this.updateArticleId(article)
        },
        async getAllColumn() {
            // 获取所有的专栏列表
            let columns = await COLUMN_API.getAllColumns()
            if (Array.isArray(columns)) {
                this.setColumnList(columns)
            }
        },
        getColumnById(columnId) {
            return this.columnList.filter(item => item.id == columnId)[0]
        },
        saveReadPosition() {
            // 记录上次阅读的位置 article:top
            let top = document.querySelector('.article-wrapper').scrollTop
            let article = this.$route.params.article
            this.setReadPosition({ article, top })
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.saveReadPosition()
        next()
    },
    beforeRouteLeave(to, from, next) {
        this.saveReadPosition()
        next()
    }
}
</script>
<style lang="scss" scoped>
.read-wrapper {
    display: flex;
    height: 100%;
    overflow: hidden;
}
.read-aside {
    width: 420px;
    min-width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #e2e2e2;
    height: 100%;
    position: relative;
}
.read-content {
    flex: 1;
}
.exit-full {
    position: fixed;
    top: 40px;
    right: 100px;
    cursor: pointer;
}
</style>
