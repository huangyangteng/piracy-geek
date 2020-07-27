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
            <section class="hltr-tool">
                <div
                    v-for="color in colorList"
                    :key="color"
                    class="hltr-color"
                    :class="{ active: activeColor == color ? true : false }"
                    :style="{ background: color }"
                    @click="changeHltrColor(color)"
                ></div>
            </section>
            <section class="read-tools">
                <el-tooltip content="保存高亮信息" placement="top">
                    <i
                        @click="saveHighlight"
                        class="el-icon-collection"
                        style="margin-right: 10px"
                    ></i>
                </el-tooltip>
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
                        style="margin-left: 10px;margin-right: 10px"
                    ></i>
                </el-tooltip>
            </section>
        </aside>
        <addNote></addNote>
    </section>
</template>
<script>
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
import { getColumnById } from '../../../tools/column-tools'
import addNote from './AddNote'
export default {
    components: {
        addNote
    },
    data() {
        return {
            colorList: ['#ffff7b', '#29B6F6', '#F44336'],
            hltr: null,
            activeColor: '#ffff7b'
        }
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
        saveHighlight() {
            let savedHightLight = window.hltr.serializeHighlights()
            if (savedHightLight == '[]') {
                return
            }
            this.$store.commit('lastRead/saveHightLight', {
                id: this.$store.state.column.curArticleId,
                content: savedHightLight
            })
            this.$Message({
                type: 'success',
                message: '高亮信息保存成功'
            })
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
        },
        changeHltrColor(color) {
            this.activeColor = color
            this.hltr.setColor(color)
        },
        cancelHighlight(removeId) {
            let hightlightDom = document.querySelectorAll('.highlighted')
            for (let i = 0; i < hightlightDom.length; i++) {
                let curDom = hightlightDom[i]
                if (curDom.dataset['timestamp'] == removeId) {
                    window.hltr.removeHighlights(curDom)
                }
            }
        },
        bindCancelHighlight() {
            // 添加删除功能
            let articleWrapperDom = document.querySelector('.article-wrapper')
            document.addEventListener('click', e => {
                let hightLightOprateMenu = articleWrapperDom.querySelector(
                    '.hightlight-oprate'
                )
                if (e.target.className == 'hight-op-item delete') {
                    this.cancelHighlight(e.target.id)
                    hightLightOprateMenu.style.visibility = 'hidden'
                    return
                }
                if (e.target.className != 'highlighted') {
                    hightLightOprateMenu.style.visibility = 'hidden'
                    return
                }
                let articleWrapperWidth = articleWrapperDom.offsetWidth - 80
                let highlightTextWidth = e.target.offsetWidth
                if (articleWrapperWidth - highlightTextWidth <= 10) {
                    // 高亮超过一行
                    hightLightOprateMenu.style.left =
                        highlightTextWidth / 2 - 113 + 'px'
                } else {
                    hightLightOprateMenu.style.left = e.target.offsetLeft + 'px'
                }
                hightLightOprateMenu.style.top = e.target.offsetTop - 50 + 'px'
                hightLightOprateMenu.style.visibility = 'visible'
                // 在取消高亮按钮上设置id,用于取消高亮
                hightLightOprateMenu.querySelector('.delete').id =
                    e.target.dataset.timestamp
            })
        },
        bindKeyboard() {}
    },
    mounted() {
        this.hltr = new window.TextHighlighter(
            document.querySelector('.article-wrapper')
        )
        window.hltr = this.hltr
        this.bindCancelHighlight()
        this.bindKeyboard()
    }
}
</script>
<style lang="scss">
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
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
.hltr-tool {
    display: inline-block;
    margin-right: 20px;
}
.hltr-color {
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #eee;
    margin-right: 10px;
}
.hltr-color.active {
    width: 30px;
    height: 30px;
    border-color: #333;
}
.read-tools {
    display: inline-block;
    height: 30px;
    line-height: 30px;
}
.highlighted {
    position: relative;
}
</style>
<style lang="css">
.hightlight-oprate {
    visibility: visible;
    position: absolute;
    z-index: 10;
    font-size: 15px;
    font-weight: 300;
    height: 44px;
    background: #484848;
    color: #fff;
    line-height: 26px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: 0.5 all;
    visibility: hidden;
}
.hightlight-oprate::before {
    content: '';
    position: absolute;
    border-top: 6px solid #484848;
    border-right: 8px solid rgba(0, 0, 0, 0);
    border-left: 8px solid rgba(0, 0, 0, 0);
    width: 0px;
    height: 0px;
    bottom: -6px;
    left: 95px;
}
.hight-op-item {
    cursor: pointer;
    padding: 0 16px;
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hight-op-item:hover {
    background: #353535;
}
.hight-op-item:first-child {
    border-radius: 8px;
}
.hight-op-item:last-child {
    border-radius: 8px;
}
</style>
