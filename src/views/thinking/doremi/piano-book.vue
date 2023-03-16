<template>
    <section class="piano-book">
        <aside>
            <el-tree
                node-key="id"
                :default-expanded-keys="expandKeys"
                :data="catalogList"
                @node-click="handleNodeClick"
            />
        </aside>
        <section class="piano-content">
            <el-input type="textarea" v-model="enContent"></el-input>
            <el-button @click="submitEnContent">提交</el-button>
        </section>
    </section>
</template>

<script>
import { AddCatalog, GetCatalogList, UpdateCatalog } from '../../../api/catalog'
import { Tree } from 'element-ui'
import { AddArticle, GetArticle } from '../../../api/article'

function buildTree(list, id = -1) {
    return list
        .filter(item => item.upper === id)
        .map(item => {
            const children = buildTree(list, item.id)
            if (children.length > 0) {
                return { ...item, children }
            }
            return item
        })
}

export default {
    name: 'piano-book',
    components: {
        [Tree.name]: Tree
    },
    data() {
        return {
            catalogList: [],
            expandKeys: [1, 6],
            catalogId: 0,
            enContent: '',
            mixContent: ''
        }
    },
    computed: {},
    methods: {
        /* ====================== *
         *    menu菜单操作
         * ====================== */
        async fetchMenu() {
            const res = await GetCatalogList()
            this.catalogList = buildTree(
                res.data.map(item => ({
                    ...item,
                    label: item.name
                }))
            )
        },
        async handleNodeClick(arg) {
            console.log(arg)
            this.catalogId = arg.id
            if (arg.articleid) {
                //存在articleId
                console.log('🏀🏀🏀')
                const res = await GetArticle(arg.articleid)
                const { encontent, mixcontent } = res.data[0]
                this.enContent = encontent
                this.mixContent = JSON.parse(mixcontent)
            } else {
                console.log('新建')
                //新建个article,并更新
                const res = await AddArticle({
                    catalogid: arg.id,
                    encontent: '',
                    chcontent: '',
                    mixcontent: '[]'
                })
                if (res.code === 2000) {
                    const uRes =await UpdateCatalog({
                        id: arg.id,
                        articleid: res.data
                    })
                    if (uRes.code === 2000) {
                        this.fetchMenu()
                    }
                }
            }
        },
        /* ====================== *
         *    文章操作
         * ====================== */
        async submitEnContent() {
            AddArticle({
                catalogid: this.catalogId,
                encontent: this.enContent,
                chcontent: '',
                mixcontent: '[]'
            })
        }
    },
    created() {
        this.fetchMenu()
    }
}
</script>

<style lang="scss">
.piano-book {
    display: flex;
    height: 100vh;

    > aside {
        width: 500px;
        height: 100%;
    }

    .piano-content {
        flex: 1;
    }

    //    覆盖el-tree的样式
    .el-tree {
        color: #fff;
        background: #111;
    }

    .el-tree-node__content:hover {
        background: #000;
    }

    .el-tree-node:focus > .el-tree-node__content {
        background: #000;
    }
}

.piano-paragraph {
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    font-size: 24px;

    div {
        margin-right: 5px;
        margin-bottom: 16px;
        position: relative;

        .ch {
            position: absolute;
            font-size: 12px;
            white-space: nowrap;
            left: 2px;
            bottom: 0;
            margin-bottom: -20px;
            font-weight: 500;
        }
    }
}
</style>
