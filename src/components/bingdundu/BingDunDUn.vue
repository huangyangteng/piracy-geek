<template>
    <section class="model-wrapper" id="model-box"></section>
</template>

<script>
import { init } from './renderBingDunDun'

export default {
    name: 'bing-dun-dun',
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {
        init()
    }
}
</script>

<style lang="scss" scoped>
.model-wrapper {
    width: 600px;
    height: 400px;
    background: #ccc;
}
</style>