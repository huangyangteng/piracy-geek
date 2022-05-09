<template>
    <section class="video-list">
        <section class="category">
            <b style="margin-right:12px;font-weight:400">分类：</b>
            <span
                :class="{ active: item.name == activeCategory }"
                v-for="item in categories"
                :key="item.name"
                @click="selectCategory(item)"
                >{{ item.label }}</span
            >
            <template v-if="isLogin">
                <b style="margin-left:20px;margin-right:10px;font-weight:400"
                    >|
                </b>

                <span
                    v-if="!showManage"
                    class="operate-item"
                    @click="manageVideo"
                    >管理</span
                >
                <template v-else>
                    <span class="operate-item" @click="exitManage"
                        >退出管理</span
                    >
                    <span
                        :style="{
                            opacity: this.selectedVideoIds.length ? 1 : 0.5
                        }"
                        class="operate-item"
                        @click="deleteVideos"
                        >删除</span
                    >
                </template>
                <add-video @upload-success="uploadSuccess"></add-video>
            </template>
        </section>
        <section class="filter-text">
            <el-input
                prefix-icon="el-icon-search"
                size="mini"
                style="width:240px"
                v-model="filterText"
                clearable
            />
        </section>
        <section class="course-list" v-loading="loading">
            <section v-if="exhibitCourse.length === 0">暂无数据</section>
            <div
                class="course-item"
                @click="jumpToCourse(item)"
                v-for="item in exhibitCourse"
                :key="item.id"
            >
                <section>
                    <img v-if="item.poster" :src="item.poster" />
                    <video
                        v-else
                        @mouseenter="onMouseEnter"
                        @mouseleave="onMouseLeave"
                        loop
                        :src="getVideoSrc(item)"
                    ></video>
                    <div
                        v-if="showManage"
                        @click.stop="clickCheckbox(item.id)"
                        class="checkbox click-big"
                    >
                        <el-checkbox :value="canShow(item.id)"></el-checkbox>
                    </div>
                </section>
                <footer>{{ item.title ? item.title : item.name }}</footer>
            </div>
        </section>
    </section>
</template>

<script>
import { Checkbox } from 'element-ui'
import { videoCategory } from '../../../../data/video/video-list'
import { formatSrc } from '../../../../tools/watch-tools'
import { isVideo, getExt } from '../../../../tools/index'
import { WATCH_API } from '../../../../api/watch'
import AddVideo from '../../components/video/add-video'
import { mapGetters, mapMutations } from 'vuex'
import { USER_API } from '../../../../api/user'
import { USER_MU } from '../../../../store/mutation-types'
import pinyin from 'pinyin'

export default {
    name: 'watch-list',
    components: { AddVideo, [Checkbox.name]: Checkbox },
    data() {
        return {
            activeCategory: videoCategory[0].name,
            categories: videoCategory,
            list: [],
            bbList: [],
            test: true,
            showManage: false,
            selectedVideoIds: [],
            loading: false,
            filterText: '',
            remainCourses: []
        }
    },
    computed: {
        ...mapGetters('user', ['videoFilter', 'userId', 'isLogin']),
        courses() {
            let local = this.list.find(
                item => item.type === this.activeCategory
            )?.list
            if (!local) {
                local = []
            }
            local = local.filter(item => !this.videoFilter.includes(item.id))

            let bb = this.bbList.filter(
                item => item.type === this.activeCategory
            )
            return bb.concat(local)
        },
        exhibitCourse() {
            if (this.filterText) {
                let valuesResult = this.courses.filter(item => {
                    let title = item.title ? item.title : item.name
                    title = title.toLowerCase()
                    return title.includes(this.filterText)
                })
                if (valuesResult.length > 0) {
                    return valuesResult
                } else {
                    const getReg = queryString => {
                        let str = '(.*?)'
                        let queryStringArr = queryString.split('')
                        let regStr = str + queryStringArr.join(str) + str
                        return RegExp(regStr, 'i')
                    }
                    const reg = getReg(this.filterText)
                    return this.courses.filter(item => {
                        let title = item.title ? item.title : item.name
                        //根据搜索词生成正则
                        let title_pinyin = pinyin(title, {
                            segment: true,
                            group: true,
                            style: pinyin.STYLE_NORMAL
                        })
                            .flat()
                            .join('')
                        return reg.test(title_pinyin)
                    })
                }
            } else {
                return this.courses
            }
        }
    },
    watch: {
        '$route.query.category': {
            immediate: true,
            handler(category) {
                if (category) {
                    this.activeCategory = category
                    this.queryList()
                }
            }
        }
    },
    methods: {
        ...mapMutations('user', [USER_MU.SET_USER]),

        uploadSuccess({ type }) {
            //上傳成功後重新獲取數據
            console.log(type)
            this.selectCategory({ name: type })
        },
        async deleteVideos() {
            if (this.selectedVideoIds.length === 0) {
                this.$Message.error('请选择要删除的视频!')
                return
            }
            //本地视频的删除和数据库视频的删除分开处理
            const localIds = this.selectedVideoIds.filter(
                item => typeof item === 'string'
            )
            //本地视频处理
            if (localIds.length) {
                const localRes = await USER_API.addFilterVideo({
                    filter: localIds.join(','),
                    id: this.userId
                })
                console.log('localRes', localRes)
                if (localRes.code === 2000) {
                    this[USER_MU.SET_USER]({
                        filter: localRes.data.filter
                    })
                }
            }
            //数据库的视频处理
            const dbIds = this.selectedVideoIds.filter(
                item => typeof item === 'number'
            )
            if (dbIds.length) {
                await WATCH_API.deleteVideo(dbIds)
            }

            this.$Message.success('删除成功')
            this.selectedVideoIds = []
            //重新获取数据
            this.queryList()
        },
        canShow(id) {
            return this.selectedVideoIds.includes(id)
        },
        manageVideo() {
            this.showManage = !this.showManage
        },
        exitManage() {
            this.showManage = false
            this.selectedVideoIds = []
        },
        clickCheckbox(id) {
            let index = this.selectedVideoIds.findIndex(item => item == id)
            if (index !== -1) {
                //存在
                this.selectedVideoIds.splice(index, 1)
            } else {
                this.selectedVideoIds.push(id)
            }
        },
        selectCategory(item) {
            if (this.$route.query.category === item.name) {
                this.queryList()
            } else {
                this.$router.push({
                    name: this.$route.name,
                    query: { category: item.name }
                })
            }
        },
        onMouseEnter(e) {
            const dom = e.target
            dom.volume = 0
            dom.playbackRate = 2
            e.target.play()
        },
        onMouseLeave(e) {
            e.target.pause()
        },
        getVideoSrc(item) {
            const video = item.list.find(item => isVideo(getExt(item)))
            return formatSrc(video)
        },
        async queryList() {
            this.loading = true
            const bbRes = await WATCH_API.getBBVideos()
            this.bbList = bbRes.data
            this.loading = false
            // const res = await WATCH_API.getList()
            // this.loading = false
            // if (res.code == 2000) {
            //     this.list = res.data
            //     this.bbList = bbRes.data
            // }
        },
        jumpToCourse(item) {
            if (item.bid) {
                this.$router.push({
                    name: 'watch',
                    params: {
                        id: item.bid
                    },
                    query: {
                        category: this.activeCategory,
                        link: item.link,
                        type: item.from === 'bb' ? 'bb' : 'acfun'
                    }
                })
            } else {
                this.$router.push({
                    name: 'watch',
                    params: {
                        id: item.id
                    },
                    query: {
                        category: this.activeCategory
                    }
                })
            }
        }
    },
    created() {
        this.queryList()
    }
}
</script>
<style lang="scss">
.el-loading-spinner .circular {
    display: block;
}

.el-loading-spinner {
    height: auto;
}

.filter-text {
    margin-top: 12px;

    input {
        border: 1px solid $color-help;
    }
}
</style>
<style lang="scss" scoped>
.video-list {
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px;
}

.category {
    font-size: 18px;

    > span {
        margin-right: 12px;
        cursor: pointer;
    }

    span.active {
        display: inline-block;
        color: $--color-primary;
        font-weight: 800;
    }
}

.operate-item {
    cursor: pointer;

    &:hover {
        color: $--color-primary;
    }
}

.course-list {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    min-height: 320px;
}

.course-item {
    height: 300px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    width: 360px;
    position: relative;

    .checkbox {
        position: absolute;
        padding: 5px;
        left: 0;
        top: 0;
    }

    > section {
        height: 200px;
        // background: $component-bg-color;
        border-radius: 10px;
        overflow: hidden;

        video,
        img {
            width: 100%;
            height: 100%;
            // object-fit: cover;
        }
    }

    > footer {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 800;
    }
}
</style>