<template>
    <section>
        <login-modal v-if="true"></login-modal>
        <bing-dun-dun v-if="false"></bing-dun-dun>
        <test-bdy v-if="false"></test-bdy>
        <section
            v-if="false"
            style="width: 800px;height: 600px;position: relative"
        >
            <wave v-if="false"></wave>
            <cube v-if="false"></cube>
        </section>
      <TestVideoPlayer v-if="true"></TestVideoPlayer>
    </section>
</template>
<script>
import BingDunDun from '../../components/lazy-panda/LazyPanda'
import TestBdy from './test-bdy'
import Wave from '../../components/loading/wave'
import Cube from '../../components/loading/cube'
import TestVideoPlayer from './test-video-player'
import LoginModal from "../Workbench/components/common/login-modal";
export default {
    components: {LoginModal, Cube, Wave, TestBdy, BingDunDun,TestVideoPlayer },
    data() {
        return {}
    },
    computed: {},
    mounted() {}
}
</script>
<style lang="scss" scoped>
.box {
    width: 300px;
    height: 300px;
    background-color: #ccc;
}

.mouse-follow {
    // display: none;
    border: 1px solid #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    margin: -15px 0 0 -15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    // transition: 0.4s;
}
</style>
