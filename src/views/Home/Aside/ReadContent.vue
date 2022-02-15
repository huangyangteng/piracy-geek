<template>
    <section>
        <el-menu
            :unique-opened="config.uniqueOpened"
            :default-active="curArticleId"
            class="el-menu-vertical-demo"
            @select="selectArticle"
        >
            <el-submenu
                :index="item.id"
                v-for="item in curContents"
                :key="item.id"
            >
                <template slot="title">
                    <span>{{ item.title }}</span>
                </template>
                <el-menu-item
                    v-for="sub in item.subList"
                    :index="sub.id"
                    :key="sub.id"
                    >{{ sub.title }}</el-menu-item
                >
            </el-submenu>
        </el-menu>
    </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'ReadContent',
    data() {
        return {
            config: {
                uniqueOpened: true
            }
        }
    },
    computed: {
        ...mapState('column', ['curArticleId', 'outlineList']),
        ...mapGetters('column', ['curContents', 'isFold'])
    },
    methods: {
        selectArticle(article) {
            let { column } = this.$route.params
            this.$router.push({ name: 'read', params: { column, article } })
        }
    },
    created() {}
}
</script>

<style lang="less" scoped></style>
