<template>
    <section class="bench-header">
        <div class="center">
            <el-input
                v-model="searchKey"
                prefix-icon="el-icon-search"
                placeholder="Search Something..."
            ></el-input>
        </div>
    </section>
</template>

<script>
export default {
    name: 'bench-header',
    data() {
        return {
            searchKey: ''
        }
    },
    computed: {},
    methods: {},
    created() {}
}
</script>

<style lang="scss" scoped>
.bench-header {
    .center {
        width: 600px;
        margin: 0 auto;
    }
}
</style>
