<template>
    <section>
        <bing-dun-dun></bing-dun-dun>
        <test-bdy v-if="false"></test-bdy>
        <section style="width: 800px;height: 600px;position: relative">
            <wave v-if="false"></wave>
            <cube></cube>
        </section>
    </section>
</template>
<script>
import BingDunDun from '../../components/bingdundu/BingDunDUn'
import TestBdy from './test-bdy'
import Wave from '../../components/loading/wave'
import Cube from '../../components/loading/cube'

export default {
    components: { Cube, Wave, TestBdy, BingDunDun },
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
