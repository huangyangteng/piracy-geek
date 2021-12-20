<template>
    <section>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column prop="date" label="音乐标题" width="420">
            </el-table-column>
            <el-table-column prop="name" label="歌手" width="180">
            </el-table-column>
            <el-table-column prop="address" label="专辑"> </el-table-column>
        </el-table>
    </section>
</template>

<script>
export default {
    name: 'music-list',
    components: {},
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        }
    },
    computed: {},
    methods: {},
    created() {}
}
</script>

<style lang="less" scoped></style>
