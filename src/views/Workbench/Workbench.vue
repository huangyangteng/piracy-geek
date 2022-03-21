<template>
    <section class="bench-layout animate__animated animate__fadeIn">
        <bench-header @focus="onFocus"></bench-header>
        <section
            class="bench-wrapper"
            :style="{ filter: showSearch ? 'blur(5px)' : 'none' }"
        >
            <bench-sidebar></bench-sidebar>
            <section class="bench-content">
                <router-view></router-view>
            </section>
        </section>
        <!--        搜索面板-->
        <div class="search-wrapper" v-show="showSearch" @click.self="reset">
            <div class="search-input">
                <el-input
                    ref="searchDom"
                    v-model="searchKey"
                    @input="onSearch"
                    prefix-icon="el-icon-search"
                    placeholder="Search Something..."
                    @keydown.native="onKeyDown"
                    :clearable="true"
                    @clear="reset"
                ></el-input>
            </div>
            <div class="search-suggest-list" v-show="suggestList.length">
                <div
                    class="suggest-item"
                    :class="{ active: activeIndex === index }"
                    v-for="(item, index) in suggestList"
                    :key="item.id"
                    @click="toArticle(item)"
                >
                    <i
                        v-if="item.searchType === 'column'"
                        class="el-icon-folder"
                    ></i>
                    {{ item.title }}
                </div>
            </div>
            <div class="search-list" v-show="suggestList.length"></div>
        </div>
        <!--        bingdundun展示-->
        <bing-dun-dun
            class="animate__animated animate__fadeInDown bingdundun"
        ></bing-dun-dun>
    </section>
</template>

<script>
import './bench.scss'
import 'animate.css'
import BenchSidebar from './layout/bench-sidebar'
import BenchHeader from './layout/bench-header'
import { searchEverything } from '../../tools/search'
import { SEARCH_TYPE } from '../../data/search'
import BingDunDun from '../../components/bingdundu/BingDunDUn'

export default {
    name: 'Workbench',
    components: {
        BingDunDun,
        'bench-sidebar': BenchSidebar,
        BenchHeader
    },
    data() {
        return {
            searchKey: '',
            showSearch: false,
            suggestList: [], //建议列表
            activeIndex: -1, //搜索当前选中item索引
            findList: [] //查找结果列表
        }
    },
    computed: {},
    methods: {
        onFocus() {
            this.showSearch = true
            this.$nextTick(() => {
                this.$refs.searchDom.focus()
            })
        },
        reset() {
            this.showSearch = false
            this.searchKey = ''
            this.suggestList = []
            this.activeIndex = -1
        },
        onSearch() {
            const result = searchEverything(this.searchKey)
            this.suggestList = Array.isArray(result) ? result : []
        },
        toArticle(item) {
            const { columnId, id, searchType } = item
            if (searchType === SEARCH_TYPE.ARTICLE) {
                this.$router.push({
                    name: 'read',
                    params: {
                        column: columnId,
                        article: id
                    }
                })
            } else if (searchType === SEARCH_TYPE.COLUMN) {
                let articleId
                const tmp = item.contents[0]
                if (Array.isArray(tmp.subList)) {
                    articleId = tmp.subList[0].id
                }
                this.$router.push({
                    name: 'read',
                    params: {
                        column: item.id,
                        article: articleId
                    }
                })
            }
        },
        onKeyDown(e) {
            // 下键40 上键38 enter 13
            if (e.keyCode === 38) {
                //按上
                this.activeIndex--
                if (this.activeIndex < 0) {
                    this.activeIndex = 0
                }
            } else if (e.keyCode === 40) {
                //按下
                this.activeIndex++
                if (this.activeIndex > this.suggestList.length - 1) {
                    this.activeIndex = this.suggestList.length - 1
                }
            } else if (e.keyCode == 13) {
                //回车
                if (this.activeIndex !== -1) {
                    const item = this.suggestList[this.activeIndex]
                    this.toArticle(item)
                    // this.$router.push({
                    //     name: 'read',
                    //     params: {
                    //         column: item.columnId,
                    //         article: item.id
                    //     }
                    // })
                }
            }
        }
    },
    mounted() {
        document.title = '工作台'
    }
}
</script>

<style lang="scss" scoped>
.bingdundun {
    position: fixed;
    right: 0px;
    bottom: 0px;
    margin-right: -180px;
    margin-bottom: -100px;
}

.search-wrapper {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;

    .search-input {
        width: 610px;
        margin: 0px auto;
        line-height: 48px;
        height: 48px;
        padding-left: 10px;
    }

    .search-suggest-list {
        width: 600px;
        margin: 0px auto;
        min-height: 400px;
        background: #17181a;
        border-radius: 8px;
        margin-top: 20px;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
        padding: 12px 0;
    }

    .suggest-item {
        padding: 0 24px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        transition: 0.3s background-color;
        cursor: pointer;
    }

    .suggest-item:hover,
    .suggest-item.active {
        background: #2b2b2b;
    }
}

//小于750的尺寸
@media (max-width: 750px) {
    //隐藏侧边栏
    .bench-sidebar {
        display: none;
    }
    .search-wrapper {
        .search-input {
            width: 350px;
        }

        .search-suggest-list {
            width: 350px;
        }
    }
}
</style>
