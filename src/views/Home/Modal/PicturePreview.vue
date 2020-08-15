<template>
    <section>
        <el-dialog
            title="提示"
            :visible.sync="picturePreview.show"
            :width="picturePreview.width"
            custom-class="picture-preview"
            center
            :show-close="showClose"
        >
            <div slot="title"></div>
            <img :src="picturePreview.src" alt="" srcset="" />
        </el-dialog>
    </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            showClose: false
        }
    },
    computed: {
        ...mapState('component', ['picturePreview'])
    },
    methods: {
        ...mapMutations('component', ['updatePicturePreview'])
    },
    mounted() {
        window.addEventListener('click', e => {
            let target = e.target
            if (target.nodeName == 'IMG') {
                if (target.className == 'not-preview') return
                this.updatePicturePreview({
                    src: target.src,
                    width: target.naturalWidth + 'px',
                    show: true
                })
            }
        })
    }
}
</script>
<style lang="scss">
.picture-preview {
    background: transparent;
    .el-dialog__header {
        padding: 0;
    }
    .el-dialog__body {
        text-align: center;
        padding: 0 !important;
    }
    img {
        max-width: 1200px;
    }
}
</style>
