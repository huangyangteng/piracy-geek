<template>
    <section class="read-tool-bar">
        <i
            @click="toggleFold"
            v-show="!isFold"
            class="el-icon-s-fold fold-icon"
        ></i>
        <i
            @click="toggleFold"
            v-show="isFold"
            class="el-icon-s-unfold fold-icon"
        ></i>
        <span class="jk-title">{{ curColumnTitle }}</span>
        <aside>
            <el-dropdown trigger="click" @command="changeColumn">
                <el-tooltip content="选课" placement="top">
                    <i class="el-icon-reading" style="font-size: 16px"></i>
                </el-tooltip>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        v-for="item in columnList"
                        :key="item.id"
                        :command="item.id"
                        :divided="item.divided"
                        >{{ item.title }}</el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>

            <el-tooltip content="全屏阅读" placement="top">
                <i
                    @click="fullScreen"
                    class="el-icon-full-screen"
                    style="margin-left: 10px;"
                ></i>
            </el-tooltip>
            <el-tooltip content="提示" placement="top">
                <i
                    @click="watchTip"
                    class="el-icon-s-opportunity icon-tip"
                    style="margin-right: 10px;margin-left: 10px;"
                ></i>
            </el-tooltip>
        </aside>
    </section>
</template>
<script>
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
import { getColumnById } from '../../../tools/column-tools'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('column', ['columnList']),
        ...mapGetters('column', ['curColumnTitle', 'isFold']),
        ...mapGetters('lastRead', ['getLastArticleId'])
    },
    methods: {
        ...mapMutations('column', ['toggleNavIsShow']),
        ...mapActions('column', ['fullScreen']),
        toggleFold() {
            this.toggleNavIsShow(this.isFold)
        },
        watchTip() {
            this.$router.push({ name: 'tip' })
        },
        changeColumn(column) {
            let columnInfo = getColumnById(this.columnList, column)
            let lastArticle = this.getLastArticleId(column)
            let defaultArticle = columnInfo.contents[0].subList[0].id
            let article = lastArticle ? lastArticle : defaultArticle
            this.$router.push({
                name: 'read',
                params: { column, article }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.read-tool-bar {
    border-bottom: 1px solid #e2e2e2;
    height: 66px;
    padding: 0 38px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    > i {
        cursor: pointer;
        margin-right: 25px;
        font-size: 30px;
        color: #666;
        font-weight: 200;
    }
    > aside {
        flex: 1;
        margin-right: 20px;
        text-align: right;
        i {
            cursor: pointer;
        }
    }
}
.jk-title {
    color: #333;
    font-weight: 400;
    font-size: 1.5em;
}
.icon-tip {
    color: #fa8919;
}
</style>
