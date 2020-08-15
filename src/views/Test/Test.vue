<template>
    <section>
        <div class="box"></div>
        <div class="mouse-follow" :style="followBoxStyle"></div>
        <AudioPlayer></AudioPlayer>
    </section>
</template>
<script>
import AudioPlayer from '../../components/AudioPlayer'
export default {
    components: { AudioPlayer },
    data() {
        return {
            followBox: {
                left: 0,
                top: 0
            },
            tmpLeft: 0,
            tmpTop: 0
        }
    },
    computed: {
        followBoxStyle() {
            let left = this.followBox.left + 'px'
            let top = this.followBox.top + 'px'
            let scale = 1
            // let scale = Math.random() * 0.1 + 0.8
            return {
                transform: `translate(${left},${top}) scale(${scale})`
            }
        }
    },
    mounted() {
        ;(window.onmousemove = e => {
            this.tmpLeft = e.clientX - 50
            this.tmpTop = e.clientY - 50
        }),
            setInterval(() => {
                this.followBox.left += (this.tmpLeft - this.followBox.left) / 6
                this.followBox.top += (this.tmpTop - this.followBox.top) / 6
            }, 20)
    }
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
