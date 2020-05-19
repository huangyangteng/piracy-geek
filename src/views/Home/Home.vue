<template>
    <section></section>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('lastRead', ['lastColumnId'])
    },
    methods: {},
    created() {
        let lastColumn = this.lastColumnId
        let lastArticle = this.$store.getters['lastRead/getLastArticleId'](
            this.lastColumnId
        )
        // 如果不存在历史记录
        if (!lastColumn || !lastArticle) {
            lastColumn = 'chongxueqianduan'
            lastArticle = 'YO5vkhdcI9w2rXac'
        }
        // 如果存在历史记录，跳转到Read.vue组件
        this.$router.push({
            name: 'read',
            params: {
                column: lastColumn,
                article: lastArticle
            }
        })
    }
}
</script>
<style lang="scss" scoped></style>
