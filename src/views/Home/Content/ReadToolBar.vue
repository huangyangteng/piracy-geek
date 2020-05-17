<template>
    <section class="read-tool-bar">
        <i @click="toggleFold" v-show="!isFold" class="el-icon-s-fold"></i>
        <i @click="toggleFold" v-show="isFold" class="el-icon-s-unfold"></i>
        <span class="jk-title">{{ curColumnTitle }}</span>
        <aside>
            <el-dropdown trigger="click" @command="changeColumn">
                <el-tooltip content="选课" placement="top">
                    <i
                        class="el-icon-reading cursor-pointer"
                        style="font-size: 16px"
                    ></i>
                </el-tooltip>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        v-for="item in columnList"
                        :key="item.id"
                        :command="item.id"
                        :divided="item.divided"
                        >{{ item.title }}</el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>

            <el-tooltip content="全屏阅读" placement="top">
                <i
                    @click="fullScreen"
                    class="el-icon-full-screen cursor-pointer"
                    style="margin-left: 10px;"
                ></i>
            </el-tooltip>
            <el-tooltip content="提示" placement="top">
                <i
                    @click="watchTip"
                    class="el-icon-s-opportunity cursor-pointer"
                    style="margin-right: 10px;margin-left: 10px;"
                ></i>
            </el-tooltip>
        </aside>
    </section>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('column', ['columnList']),
        ...mapGetters('column', ['curColumnTitle', 'isFold'])
    },
    methods: {
        ...mapMutations('column', ['toggleNavIsShow']),
        toggleFold() {
            this.toggleNavIsShow(this.isFold)
        },
        fullScreen() {},
        watchTip() {},
        changeColumn() {}
    }
}
</script>
<style lang="scss" scoped>
.read-tool-bar {
    border-bottom: 1px solid #e2e2e2;
    height: 66px;
    padding: 0 38px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    > i {
        cursor: pointer;
        margin-right: 25px;
        font-size: 30px;
        color: #333;
        font-weight: 200;
    }
    > aside {
        flex: 1;
        margin-right: 20px;
        text-align: right;
    }
}
</style>
