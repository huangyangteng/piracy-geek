<template>
    <section>
        <el-dialog
            title="配置"
            :visible.sync="show"
            custom-class="config-preview"
            center
        >
            <span>点击大纲滚动距离不准确，可以在此处微调：</span>
            <el-input></el-input>
        </el-dialog>
    </section>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>
<style lang="less" scoped></style>
