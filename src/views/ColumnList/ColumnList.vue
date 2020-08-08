<template>
    <section class="column-list">
        <header>
            <section
                class="tab-study-path"
                :class="{ active: item.name === activePath }"
                v-for="item in pathList"
                :key="item.name"
                @click="clickColumn(item)"
            >
                <aside>
                    <strong>{{ item.label }}</strong>
                    <span>{{ item.nums }}门课程</span>
                </aside>
                <img :src="item.img" />
            </section>
        </header>
        <main>
            <section
                v-for="column in selectedColumns"
                :key="column.id"
                class="panel-column-item"
            >
                <h3 @click="toRead(column.id)">{{ column.title }}</h3>
                <h4>{{ column.subTitle }}</h4>
                <p>
                    <span class="column-tag mar-r-8">{{
                        column.authorName
                    }}</span>
                    <span class="column-tag">{{ column.authorInfo }}</span>
                </p>
            </section>
        </main>
    </section>
</template>
<script>
import COLUMN_LIST from '../../data/columns'
import PATH_LIST from '../../data/pathList'
import { mapState } from 'vuex'

import { formatColumn } from '../../tools/column-tools'
export default {
    name: 'ColumnList',
    data() {
        return {
            activePath: 'cs',
            columnList: formatColumn(COLUMN_LIST, PATH_LIST)
        }
    },
    computed: {
        ...mapState('lastRead', ['lastColumnId']),
        selectedColumns() {
            return this.columnList[this.activePath]
        },
        pathList() {
            return PATH_LIST.map(item => {
                item.nums = this.columnList[item.name].length
                return item
            })
        }
    },
    methods: {
        clickColumn(item) {
            this.activePath = item.name
        },
        _getArticleId(columnId) {
            // 从历史记录中找上次阅读的id

            let lastArticle = null
            try {
                let historyList = JSON.parse(localStorage.getItem('gk-read'))[
                    'lastRead'
                ]['lastArticleList']
                let column = historyList.find(item => item.column == columnId)
                if (column) {
                    lastArticle = column.article
                }
            } catch (error) {
                console.log(error)
            }

            // 如果不存在历史记录,取第一个
            if (!lastArticle) {
                let column = this.selectedColumns.find(
                    item => item.id == columnId
                )
                lastArticle = column.contents[0].id
            }
            return lastArticle
        },
        toRead(columnId) {
            let articleId = this._getArticleId(columnId)
            // 路由跳转
            const openUrl = `${window.location.origin}/#/read/${columnId}/${articleId}`
            window.open(openUrl, '_blank')
        }
    },
    mounted() {
        document.title = '专栏列表-Piracy Geektime'
    }
}
</script>
<style lang="scss" scoped>
$--color-primary: #fa8919;
.column-list {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 20px;
    > header {
        display: flex;
        justify-content: space-between;
    }
    > main {
        background: #f6f7fa;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        padding: 40px 20px;
    }
}
.tab-study-path {
    display: inline-flex;
    margin-right: 20px;
    justify-content: space-between;
    width: 180px;
    padding: 10px;
    background: #f6f7fa;
    border-radius: 5px;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
    > aside {
        > strong {
            font-weight: 400;
            display: block;
            transition: 0.5s;
        }
        > span {
            font-weight: 100;
            font-size: 12px;
            padding-left: 8px;
        }
    }
    img {
        width: 36px;
        height: 36px;
    }
}
.tab-study-path:hover,
.tab-study-path.active {
    box-shadow: 0 0 10px rgba($color: #fa8919, $alpha: 0.1);
    strong {
        color: #fa8919;
    }
}

.panel-column-item {
    background: #fff;
    padding: 10px 5px;
    border-radius: 5px;
    flex-basis: 30%;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    height: 126px;
    > h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 400;
        transition: 0.5s;
        white-space: nowrap;
        margin-left: 10px;
    }
    > h4 {
        margin: 0;
        margin-top: 6px;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
        color: #767676;
    }
    > p {
        margin: 20px 0 10px 12px;
    }
}
.panel-column-item:hover {
    h3 {
        color: $--color-primary;
    }
}
.column-tag {
    height: 20px;
    line-height: 20px;
    padding: 0 4px;
    font-size: 13px;
    font-weight: 400;
    color: #858585;
    background: #f1f1f1;
    border-radius: 2px;
}
</style>
