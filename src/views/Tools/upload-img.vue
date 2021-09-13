<template>
    <section class="upload-wrapper">
        <img
            v-for="item in imageList"
            :key="item.id"
            :src="FILE_PREFIX + item.path"
            alt=""
            srcset=""
            @click="clikeImg(FILE_PREFIX + item.path, $event)"
        />
        <PicturePreview></PicturePreview>
    </section>
</template>

<script>
import { UTIL_API } from '../../api/util'
import PicturePreview from '../Home/Modal/PicturePreview'
import { mapState, mapMutations } from 'vuex'
import dayjs from 'dayjs'
export default {
    name: 'upload-img',
    components: {
        PicturePreview
    },
    data() {
        return {
            imageList: [],
            FILE_PREFIX: '/',
            timer: 0
        }
    },
    computed: {
        ...mapState('component', ['picturePreview'])
    },
    methods: {
        ...mapMutations('component', ['updatePicturePreview']),
        clikeImg(src, e) {
            e.stopPropagation()
            this.updatePicturePreview({
                show: true,
                src: src,
                width: e.target.naturalWidth + 'px'
            })
        },
        async handlePaster() {
            var items = event.clipboardData && event.clipboardData.items
            var file = null
            if (items && items.length) {
                // 检索剪切板items
                for (var i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf('image') !== -1) {
                        file = items[i].getAsFile()
                        break
                    }
                }
            }
            if (!file) {
                console.log('no file')
                return
            }
            let formData = new FormData()
            formData.append('file', file)
            const res = await UTIL_API.upload(formData)
            if (res.code === 2000) {
                this.$Message.success('上传成功')
                this.getFiles()
            }
        },
        async getFiles() {
            // 只获取最近三个小时之内的数据
            const end = dayjs().format('YYYY-MM-DD HH:mm:ss')
            const start = dayjs()
                .subtract(3, 'hour')
                .format('YYYY-MM-DD HH:mm:ss')
            const res = await UTIL_API.getFiles({ start, end })

            if (res.code === 2000) {
                this.imageList = res.data
            }
            console.log('getFiles -> res', res.data)
        }
    },
    mounted() {
        this.getFiles()
        // clearInterval(this.timer)
        // this.timer = setInterval(() => {
        //     console.log('get files')
        //     this.getFiles()
        // }, 10 * 1000)
        document.addEventListener('paste', this.handlePaster)
    },
    beforeDestroy() {
        // clearInterval(this.timer)
        document.removeEventListener('paste', this.handlePaster)
    }
}
</script>

<style lang="scss" scoped>
.upload-wrapper {
    margin: 0 auto;
    img {
        width: 450px;
        margin: 10px;
    }
}
</style>
