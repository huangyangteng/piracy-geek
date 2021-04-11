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
                    <span style="margin-left:20px"
                        >（预计导出需要3-4分钟，请耐心等待）</span
                    >
                </el-form-item>
            </el-form>
        </section>
    </section>
</template>

<script>
import { UTIL_API } from '../../api/util'
import dayjs from 'dayjs'
export default {
    name: 'taobao-data',
    data() {
        return {
            form: {
                cookie:
                    'thw=cn; _fbp=fb.1.1610614714506.115501406; t=69015bc6ecfbdb5769dc4390f2b6983a; _bl_uid=qnkdem01mgh36knb1myXzv75dCI5; _tb_token_=xPObtSKh94xl95nPC4d0; _samesite_flag_=true; cookie2=139cb3800f089edd2f957ad224bcb13e; xlly_s=1; unb=2207417809129; sn=%E9%82%B1%E4%BA%9A%E6%95%8F%3A%E5%B0%8F%E9%B1%BC; csg=e4559dcd; skt=aa0091f769ae131b; _cc_=UIHiLt3xSw%3D%3D; cna=4VPaF7Y72k4CAbaVoN5zSrJB; _m_h5_tk=0a82755d241d069244fcc83e647d6f41_1618136752729; _m_h5_tk_enc=77f93a207747d634621ae8ccdae3025c; v=0; uc1=cookie21=UIHiLt3xSalX&cookie14=Uoe1iuGkZvHwmQ%3D%3D; tfstk=clYfBV4uYdLyeviauIGz74Fe5fbdZtVC1m6DGHOoKO3bXEAfimaFdqRkjRQHU_1..; l=eBa74ADlj1XdEe4MBO5C-urza779fIOb8GFzaNbMiInca1uP1ET59NCQuLCvRdtxgt50ietrGzP0kRUprrU3WxGc44UB8tTvJU9w8e1..; isg=BPHxqCUWNfLZD5nm5iJD5l65AHuL3mVQcyU5O9MHj7jf-hBMGyt2IYlcHY6ccf2I',
                rate: '0',
                date: ''
            },
            loading: false
        }
    },
    computed: {},
    methods: {
        async onSubmit() {
            if (!this.form.cookie) {
                this.$Message.error('请填写cookie')
                return
            }
            this.loading = true
            const { cookie, rate, date } = this.form
            const [startTime, endTime] = date

            const req = {
                startTime: dayjs(startTime).format('YYYYMMDD'),
                endTime: dayjs(endTime).format('YYYYMMDD'),
                rate,
                cookie
            }

            const res = await UTIL_API.taobaoExpert(req)
            if (res.code == 2000) {
                const link =
                    window.location.origin +
                    '/gk-api/util/download?file=' +
                    res.data.file
                window.location.href = link
            }
            setTimeout(() => {
                this.loading = false
            }, 4000)
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
