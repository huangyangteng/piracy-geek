<template>
    <section class="bench-layout">
        <bench-header></bench-header>
        <section class="bench-wrapper">
            <bench-sidebar></bench-sidebar>
            <section class="bench-content">
                <router-view></router-view>
            </section>
        </section>
    </section>
</template>

<script>
import './bench.scss'
import BenchSidebar from './layout/bench-sidebar'
import BenchHeader from './layout/bench-header'
export default {
    name: 'Workbench',
    components: {
        'bench-sidebar': BenchSidebar,
        BenchHeader
    },
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {
        document.title = '工作台'
    }
}
</script>

<style lang="less" scoped></style>
