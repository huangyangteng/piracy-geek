<template>
    <section
        class="model-wrapper"
        id="model-box"
        @click="clickBingDun"
    ></section>
</template>

<script>
import { init } from './renderBingDunDun'
export default {
    name: 'bing-dun-dun',
    data() {
        return {
            show: true
        }
    },
    computed: {},
    methods: {
        clickBingDun() {
            this.show = false
        }
    },
    mounted() {
        init()
    }
}
</script>

<style lang="scss" scoped>
.model-wrapper {
    width: 600px;
    height: 400px;
}
</style>