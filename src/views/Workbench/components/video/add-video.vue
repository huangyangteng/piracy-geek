<template>
    <el-popover v-model="visible">
        <div class="add-video-wrapper">
            <p>链接：</p>
            <el-input v-model="link"></el-input>
            <p>标签：</p>
            <el-select
                style="margin-right: 20px"
                v-model="type"
                placeholder="请选择"
            >
                <el-option
                    v-for="item in videoCategory"
                    :key="item.name"
                    :label="item.label"
                    :value="item.name"
                >
                </el-option>
            </el-select>
            <p>来源：</p>
            <el-select
                style="margin-right: 20px"
                v-model="from"
                placeholder="请选择"
            >
                <el-option
                    v-for="item in fromCategory"
                    :key="item.name"
                    :label="item.label"
                    :value="item.name"
                >
                </el-option>
            </el-select>
            <p style="padding-top:10px;display: flex;justify-content: flex-end">
                <el-button
                    size="mini"
                    type="primary"
                    plain
                    :loading="loading"
                    @click="addVideo"
                    >添加
                </el-button>
            </p>
        </div>
        <span slot="reference" class="operate-item">添加</span>
    </el-popover>
</template>

<script>
import { videoCategory } from '../../../../data/video/video-list'
import { WATCH_API } from '../../../../api/watch'

export default {
    name: 'add-video',
    data() {
        return {
            link: '',
            type: 'letter',
            from: 'bb',
            videoCategory: videoCategory,
            loading: false,
            visible: false,
            fromCategory: [
                { name: 'bb', label: 'blibli' },
                { name: 'acfun', label: 'acfun' }
            ]
        }
    },
    watch: {
        link(src) {
            if (src.includes('blibli')) {
                this.from = 'bb'
            } else if (src.includes('acfun')) {
                this.from = 'acfun'
            }
        }
    },
    methods: {
        async addVideo() {
            this.loading = true
            const res = await WATCH_API.addBBVideo({
                link: this.link.split('?')[0],
                type: this.type,
                from: this.from
            })
            this.loading = false
            if (res.code === 2000) {
                this.$Message.success('添加成功')
                this.$emit('upload-success', { type: this.type })
                this.link = ''
            }
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped>
.add-video-wrapper {
    p {
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

.operate-item {
    cursor: pointer;

    &:hover {
        color: $--color-primary;
    }
}
</style>