<template>
    <section class="taobao-data-wrapper">
        <section class="box-card">
            <h1 style="margin-bottom:40px">评价导出</h1>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker
                            placeholder="选择日期"
                            v-model="form.date"
                            style="width: 100%;"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        >
                            ></el-date-picker
                        >
                    </el-col>
                </el-form-item>

                <el-form-item label="评价类型">
                    <el-radio-group v-model="form.rate">
                        <el-radio label="0">中评</el-radio>
                        <el-radio label="-1">差评</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="cookie">
                    <el-input
                        :autosize="{ minRows: 4, maxRows: 8 }"
                        type="textarea"
                        v-model="form.cookie"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        :loading="loading"
                        type="primary"
                        @click="onSubmit"
                        >导出数据</el-button
                    >
                </el-form-item>
            </el-form>
        </section>
    </section>
</template>

<script>
export default {
    name: 'taobao-data',
    data() {
        return {
            form: {
                cookie: '',
                rate: '0',
                date: ''
            },
            loading: false
        }
    },
    computed: {},
    methods: {
        onSubmit() {
            // this.loading = true
            console.log(this.form)
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped>
.taobao-data-wrapper {
    padding-top: 60px;
}
.box-card {
    padding: 20px;
    width: 800px;
    margin: 0px auto;
    background: $component-bg-color;
}
</style>
