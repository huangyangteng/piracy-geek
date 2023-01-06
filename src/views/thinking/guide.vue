<template>
    <section class="guide-wrapper">
        <el-button
            v-for="item in links"
            @click="jump(item)"
            :key="item.name"
            type="text"
            >{{ item.name }}
        </el-button>
    </section>
</template>

<script>
import pages from './index'
import { newPage } from '../../tools'

export default {
    name: 'guide',
    data() {
        return {
            pages: pages
        }
    },
    computed: {
        links() {
            return this.pages.filter(item => !item.hide)
        }
    },
    methods: {
        jump({ path }) {
            newPage({
                path: path
            })
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped>
.guide-wrapper {
    text-align: center;
    padding: 10%;
}
</style>
<style lang="scss">
.guide-wrapper {
    .el-button {
        font-size: 3em;
        margin-right: 20px;
    }
}
</style>
