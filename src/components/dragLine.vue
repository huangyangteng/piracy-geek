<template>
    <div
        class="drag-aside"
        :style="dragAsideStyle"
        @mousedown="dragstart"
    ></div>
</template>
<script>
export default {
    data() {
        return {
            dragAside: {
                isMoving: false,
                left: 420,
                lastLeft: 0
            }
        }
    },
    computed: {
        dragAsideStyle() {
            return {
                left: this.dragAside.left + 'px'
            }
        }
    },
    methods: {
        dragstart(e) {
            this.dragAside.lastLeft = e.clientX
            this.dragAside.isMoving = true
        },
        drag(e) {
            if (this.dragAside.isMoving) {
                let dis = e.clientX - this.dragAside.lastLeft
                let left = this.dragAside.lastLeft + dis - 10
                if (left < 300) {
                    left = 300
                } else if (left >= 600) {
                    left = 600
                }
                this.dragAside.left = left
                this.$emit('on-drag', this.dragAside.left)
            }
        }
    },
    mounted() {
        document.addEventListener('mousemove', e => {
            this.drag(e)
        })
        document.addEventListener('mouseup', () => {
            this.dragAside.isMoving = false
        })
    }
}
</script>
<style lang="scss" scoped>
.drag-aside {
    // background: red;
    width: 1px;
    cursor: col-resize;
    position: absolute;
    height: calc(100% - 40px);
    z-index: 2;
    border: 10px solid transparent;
    background-clip: padding-box;
}
</style>
