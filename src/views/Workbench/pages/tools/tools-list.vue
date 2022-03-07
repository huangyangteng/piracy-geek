<template>
    <section class="tools-list">
        <juejin-star></juejin-star>
        <video-update></video-update>
    </section>
</template>

<script>
import JuejinStar from '../../components/tools/juejin-star'
import VideoUpdate from '../../components/tools/video-update'

export default {
    name: 'tools-list',
    components: { VideoUpdate, JuejinStar },
    data() {
        return {}
    },
    computed: {},
    methods: {},
    created() {}
}
</script>

<style lang="scss" scoped>
.tools-list {
    display: flex;
    flex-wrap: wrap;
}
</style>