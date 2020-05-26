<template>
    <section class="test-wrapper">
        <aside :style="{ width: dragAside.left + 'px' }">2222</aside>
        <div
            class="drag-aside"
            :style="dragAsideStyle"
            @mousedown="dragstart"
        ></div>
        <section>111</section>
    </section>
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
            console.log(this.dragAside)
        },
        drag(e) {
            if (this.dragAside.isMoving) {
                let dis = e.clientX - this.dragAside.lastLeft
                let left = this.dragAside.lastLeft + dis
                if (left < 200) {
                    left = 200
                } else if (left > 800) {
                    left = 800
                }
                this.dragAside.left = left
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
    width: 2px;
    cursor: col-resize;
    position: absolute;
    height: 100%;
    background: red;
    z-index: 1;
    border: 4px solid transparent;
    background-clip: padding-box;
}
.test-wrapper {
    display: flex;
    height: 100%;
    overflow: hidden;
    > aside {
        width: 420px;
        min-width: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: 1px solid #e2e2e2;
        height: 100%;
        position: relative;
    }
    > section {
        flex: 1;
    }
}
</style>
