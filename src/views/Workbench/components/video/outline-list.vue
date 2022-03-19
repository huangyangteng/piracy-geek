<template>
    <section>
        <!-- <Input v-model="searchKey" @change="onSearch" /> -->

        <el-menu
            @select="onSelect"
            :theme="theme"
            style="width:100%"
            class="watch-menu"
            :default-active="activeName"
        >
            <el-submenu :index="unit.id" v-for="unit in units" :key="unit.id">
                <template slot="title">
                    <!-- <Icon type="ios-paper" /> -->
                    {{ cleanName(unit.unit) }}
                </template>
                <el-menu-item
                    v-for="item in unit.list"
                    :key="item.id"
                    :index="item.id + ''"
                    ><span>{{ cleanName(item.name) }}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </section>
</template>

<script>
import { getVideoItem } from '../../../../tools/watch-tools'

export default {
    name: 'outline-list',
    props: {
        units: {
            type: Array,
            default: () => []
        },
        active: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            activeName: '',
            searchKey: '',
            searchResult: [],
            theme: 'dark'
        }
    },
    watch: {
        active(id) {
            this.activeName = String(id)
        }
    },
    computed: {
        // ...mapState(['theme'])
    },
    methods: {
        onSearch() {
            // units结果+  item结果拼成一个unit, 关键字高亮
        },
        onSelect(id) {
            this.$emit('on-change', getVideoItem(id, this.units))
        },
        cleanName(name) {
            return name
                .replace('【微信535950311】', '')
                .replace('(更多IT教程 微信352852792)', '')
                .replace(/【更多.*】/, '')
                .replace(/【众筹.*】/, '')
                .replace(/【itjc8.*】/, '')
                .replace(/【加qq.*】/, '')
                .replace(/\[qq.*\]/, '')
                .replace(/\[加q.*\]/, '')
                .replace('开课吧前端架构-16期', '')
                .replace('_更多IT资源微信535950311', '')
                .replace(
                    /\d{3}\s-\s\d{3}—2022考研数学(-)?高等数学(-)?第.{1,2}章/,
                    ''
                )
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped></style>
