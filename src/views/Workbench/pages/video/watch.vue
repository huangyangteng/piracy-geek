<template>
    <section class="watch-wrapper">
        <nav class="watch-bar">
            <h1>
                <i
                    @click="toHome"
                    class="el-icon-arrow-left back-home-icon"
                ></i>
                <span>{{ courseTitle }}</span>
                <b>
                    /
                </b>
                {{ videoTitle }}
            </h1>
            <div class="watch-config">
                <el-switch
                    v-model="showAside"
                    :active-value="false"
                    :inactive-value="true"
                    active-text="剧场模式"
                    style="margin-right: 20px"
                >
                </el-switch>
                <el-switch v-model="playNextConfig" active-text="自动连播">
                </el-switch>

                <a
                    style="margin-left: 20px;color:#fff"
                    :href="$route.query.link"
                    target="_blank"
                    >去源网站观看高清版本</a
                >
            </div>
        </nav>
        <section class="watch-container" :style="watchContainerStyle">
            <section class="play-container" :style="videoStyle">
                <wave v-show="pageLoading"></wave>
                <video-player
                    ref="videoPlayer"
                    class="video-player vjs-custom-skin"
                    :options="playerOptions"
                    @ready="playerIsReady"
                    @play="onPlay"
                    @pause="onPause"
                    @ended="onEnded"
                    @error="onError"
                ></video-player>
            </section>
            <aside v-show="showAside" class="outline-list">
                <section>
                    <i @click="showOutline = !showOutline" class="ios-apps" />
                    <outline-list
                        :active="videoId"
                        v-if="showOutline"
                        :units="units"
                        @on-change="selectVideo"
                    ></outline-list>
                    <note-list
                        :notes="curNotes"
                        @change="handleNote"
                        v-else
                    ></note-list>
                </section>
            </aside>
        </section>

        <div style="display: none">
            <button id="next-btn" @click="playNextVideo">下一个</button>
        </div>
    </section>
</template>

<script>
import './watch.scss'
import { videoPlayer } from 'vue-video-player'
import {
    formatCourse,
    getSrcById,
    getLastPlay,
    getNameById,
    getNextVideo,
    getVideoList,
    getPrevVideo,
    getExt,
    isVideo,
    download,
    formatBBCourse
} from '../../../../tools/watch-tools'
import videojs from 'video.js'
//需要引入videojs并绑定到window上
window.videojs = videojs
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
import 'videojs-hotkeys'
import OutlineList from '../../components/video/outline-list'
import NoteList, { OPERATE } from '../../components/video/note-list'
import { mapState, mapMutations, mapGetters } from 'vuex'
import { WATCH_API } from '../../../../api/watch'
import { WATCH_MU } from '../../../../store/mutation-types'
import Wave from '../../../../components/loading/wave'

export default {
    name: 'watch',
    components: {
        Wave,
        videoPlayer,
        OutlineList,
        NoteList
    },
    data() {
        return {
            playerOptions: {
                //播放器配置
                autoplay: false,
                height: '720',
                playbackRates: [0.7, 1.0, 1.25, 1.5, 2.0],
                sources: [
                    {
                        withCredentials: false,
                        type: 'video/mp4',
                        src: ''
                    }
                ]
            },
            // 重要状态
            courseId: null, //课程id
            courseTitle: '', //课程标题
            units: [], //课程单元
            videoList: [], //所有课程
            videoId: null, //当前播放课程id

            showAside: true, //侧边栏是否显示
            showOutline: true, //显示大纲视图
            historyTimer: null,
            nextTimer: 0, //播放下一个的倒计时
            pageLoading: true,
            spareSrc: []
        }
    },
    computed: {
        ...mapState('watch', ['notes', 'history']),
        ...mapState('watch', {
            playNext: state => state.config.playNext
        }),
        isBB() {
            return this.$route.query.type === 'bb'
        },
        isAcfun() {
            return this.$route.query.type === 'acfun'
        },
        curNotes() {
            try {
                return this.notes
                    .find(item => item.videoId == this.videoId)
                    .list.reverse()
            } catch (error) {
                return []
            }
        },
        curVideo() {
            return this.videoList.find(item => item.id == this.videoId)
        },
        videoTitle() {
            if (this.curVideo) {
                return this.curVideo.name
            } else {
                return ''
            }
        },
        player() {
            return this.$refs.videoPlayer.player
        },
        videoStyle() {
            if (this.showAside) {
                return {}
            } else {
                return {
                    width: '100%',
                    height: `calc(100vh - 45px)`,
                    marginTop: 0,
                    margin: 'auto'
                }
            }
        },
        videoInfoStyle() {
            if (this.showAside) {
                return {}
            } else {
                return {
                    padding: '0 100px'
                }
            }
        },
        watchContainerStyle() {
            if (this.showAside) {
                return {
                    padding: '0 40px'
                }
            } else {
                return {}
            }
        },
        playNextConfig: {
            get() {
                return this.playNext
            },
            set(val) {
                this.$store.commit('watch/SET_CONFIG', { playNext: val })
            }
        }
    },
    watch: {
        videoSize() {
            this.playerOptions.height = this.videoSize.height
        },
        //逻辑从这里开始调用(一进入页面就会触发)：监听课程id的改变，获取数据
        '$route.params.id': {
            //课程id，根据课程id获取数据
            immediate: true,
            handler(id) {
                if (id) {
                    this.courseId = id
                    if (this.isBB) {
                        this.queryBBCourse(this.$route.query.link)
                    } else if (this.isAcfun) {
                        console.log('isAcfun')
                        this.queryAcfunCourse(this.$route.query.link)
                    } else {
                        this.queryCourseById(id)
                    }
                }
            }
        },
        //
        '$route.query.videoId': {
            immediate: false,
            handler(videoId) {
                //视频id,切换侧边栏时触发
                this.pageLoading = true
                let src
                if (this.isBB) {
                    console.log('bb video ', videoId)
                    WATCH_API.getBBCourse({
                        link: this.$route.query.link,
                        onlySrc: 1
                    }).then(res => {
                        src = res.data.src
                        this.playVideo(src, true)
                    })
                } else if (this.isAcfun) {
                    console.log('acfun video ', videoId)
                    WATCH_API.getAcfunCourse({
                        link: this.$route.query.link,
                        onlySrc: 1
                    }).then(res => {
                        src = res.data.src
                        this.playVideo(src, true)
                    })
                } else {
                    src = getSrcById(videoId, this.units)
                    this.playVideo(src, true)
                }
            }
        }
    },
    methods: {
        // ...mapMutations([GLOBAL_MU.TOGGLE_THEME]),
        ...mapMutations('watch', [
            WATCH_MU.ADD_NOTE,
            WATCH_MU.REMOVE_NOTE,
            WATCH_MU.MODIFY_NOTE,
            WATCH_MU.ADD_HISTORY
        ]),
        onError(e) {
            console.log(e, 'error')
        },
        toBB() {
            window.open(this.$route.query.link, '_blank')
        },
        async queryCourseById(id) {
            let res = await WATCH_API.query({ courseId: id })
            if (res.code == 2000) {
                const { list, title } = res.data
                let result = formatCourse(list, title)
                this.courseTitle = title
                this.units = result
                this.videoList = getVideoList(this.units)
                if (this.units.length > 0) {
                    // 根据url参数播放视频
                    const videoId = this.$route.query.videoId
                    if (videoId) {
                        this.videoId = videoId
                    } else {
                        //如果url上没有id，播放第一个
                        this.videoId = this.videoList[0].id
                    }
                    this.playVideo()
                }
                // this.showHistory()
            }
        },
        async queryBBCourse(link) {
            //  从blibli获取视频信息
            const res = await WATCH_API.getBBCourse({
                link
            })
            if (res.code != 2000) {
                return
            }
            const { title, src } = res.data
            this.courseTitle = title
            this.units = formatBBCourse(res.data)
            this.videoList = this.units[0].list
            this.videoId = this.$route.query.videoId
                ? this.$route.query.videoId
                : this.videoList[0].id
            this.playVideo(src)
        },
        async queryAcfunCourse(link) {
            const res = await WATCH_API.getAcfunCourse({
                link
            })
            console.log(res)
            if (res.code != 2000) {
                return
            }
            const { title, src, spareSrc } = res.data
            this.spareSrc = spareSrc
            this.courseTitle = title
            this.units = formatBBCourse(res.data)
            this.videoList = this.units[0].list

            this.videoId = this.$route.query.videoId
                ? this.$route.query.videoId
                : this.videoList[0].id
            this.playVideo(src)
            // console.log('units',this.units)
            // console.log('videoList',this.videoList)
            // console.log('videoId',this.videoId)
        },
        handleNote({ operate, data }) {
            console.log('handleNote -> data', data)
            if (operate == OPERATE.ADD) {
                this[WATCH_MU.ADD_NOTE]({
                    videoId: this.videoId,
                    currentTime: this.player.currentTime(),
                    value: data.value
                })
            } else if (operate == OPERATE.DELETEE) {
                this[WATCH_MU.REMOVE_NOTE]({
                    videoId: this.videoId,
                    date: data.date
                })
            } else if (operate == OPERATE.MODIFY) {
                this[WATCH_MU.MODIFY_NOTE]({
                    videoId: this.videoId,
                    date: data.date,
                    value: data.value
                })
            } else if (operate == OPERATE.SET_TIME) {
                this.player.currentTime(data.currentTime)
            }
        },
        expand() {
            this.showAside = !this.showAside
        },
        selectVideo(videoItem) {
            console.log(videoItem)
            //选中侧边栏时的操作
            const { id, src, page } = videoItem
            this.videoId = id

            //b站的视频播放 http://localhost:8080/#/workbench/watch/BV1Mg411g7C8?type=bb&link=https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV1Mg411g7C8
            if (this.isBB) {
                let link = this.$route.query.link
                if (link.includes('?') && !link.includes('p=')) {
                    link = link + `&p=${page}`
                } else {
                    link = link.split('?')[0] + `?p=${page}`
                }
                console.log('link', link)
                this.$router.push({
                    name: 'watch',
                    params: { id: this.courseId },
                    query: {
                        videoId: this.videoId,
                        link,
                        type: 'bb',
                        category: this.$route.query.category
                    }
                })
            } else if (this.isAcfun) {
                console.log('this.isAcfun', this.courseId)
                this.$router.push({
                    name: this.$route.name,
                    params: { id: this.courseId },
                    query: {
                        videoId: this.videoId,
                        link: videoItem.link,
                        type: 'acfun',
                        category: this.$route.query.category
                    }
                })
            } else {
                //本地视频处理： 如果src后缀是视频，则播放，否则下载
                if (isVideo(getExt(src))) {
                    this.$router.push({
                        name: 'watch',
                        params: { id: this.courseId },
                        query: { videoId: this.videoId }
                    })
                } else {
                    let tmp = src.split('.')
                    tmp.pop()
                    const name = tmp.pop()
                    const link = window.location.origin + '/' + src
                    download(link, name)
                    this.$Message.success('资源下载成功!')
                }
            }
        },
        playVideo(src = null, autoplay = false) {
            if (!src) {
                src = this.curVideo.src
            }
            //本地视频是相对路径，所以要添加origin才能播放
            if (!src.includes('http')) {
                src = window.location.origin + '/' + src
            }
            //播放m3u8格式的视频，需要指定type
            if (getExt(src).includes('m3u8')) {
                this.playerOptions.sources[0].type = 'application/x-mpegURL'
            }

            this.playerOptions.sources[0].src = src
            if (autoplay) {
                this.playerOptions.autoplay = true
            }
            // 设置title
            document.title = this.curVideo.name
            //隐藏loading
            setTimeout(() => {
                this.pageLoading = false
            }, 1000)
        },
        playerIsReady(player) {
            this.insertElement()
            // 跳转到上次播放的位置
            const item = this.history.find(item => item.videoId == this.videoId)
            if (item) {
                this.player.currentTime(item.currentTime)
            }

            player.hotkeys({
                enableVolumeScroll: false,
                seekStep: 5,
                enableModifiersForNumbers: false,
                captureDocumentHotkeys: true,
                documentHotkeysFocusElementFilter: e =>
                    e.tagName.toLowerCase() === 'body'
            })
        },
        toHome() {
            this.$router.push({
                path: '/workbench/video',
                query: {
                    category: this.$route.query.category
                }
            })
        },
        logHistory() {
            clearInterval(this.historyTimer)
            this.historyTimer = setInterval(() => {
                let video = this.player.el_.querySelector('video')
                //如果视频正在播放
                if (!video.paused && video.readyState > 3) {
                    console.log(' log history')
                    this[WATCH_MU.ADD_HISTORY]({
                        videoId: this.videoId,
                        currentTime: this.player.currentTime(),
                        courseId: this.courseId
                    })
                } else {
                    clearInterval(this.historyTimer)
                }
            }, 10 * 1000)
        },
        showHistory() {
            const item = getLastPlay(this.courseId, this.history)
            if (!item) return
            const { date, videoId } = item
            const name = getNameById(videoId, this.units)
            if (!name) return
            // 上次播放
            //
            this.$Notice.info({
                title: '温馨提示',
                duration: 8,
                render: h => {
                    return h(
                        'div',
                        {
                            class: 'history-notice'
                        },
                        [
                            h('p', [
                                '上次播放：',
                                h(
                                    'a',
                                    {
                                        on: {
                                            click: () => {
                                                this.$router.push({
                                                    name: 'watch',
                                                    params: {
                                                        id: this.courseId
                                                    },
                                                    query: {
                                                        videoId: videoId
                                                    }
                                                })
                                            }
                                        }
                                    },
                                    name
                                )
                            ]),
                            h('p', ['播放时间：' + date])
                        ]
                    )
                }
            })
        },
        onEnded() {
            // 播放下一个
            if (!this.playNext) return

            const nextVideo = getNextVideo(this.videoId, this.units, this.isBB)
            if (nextVideo) {
                this.videoId = nextVideo.id
                setTimeout(() => {
                    this.selectVideo(nextVideo)
                }, 1000)
            }
        },
        playNextVideo() {
            const isLocal = !this.isBB && !this.isAcfun
            const nextVideo = getNextVideo(this.videoId, this.units, isLocal)
            console.log('nextVideo', nextVideo)
            if (nextVideo) {
                this.videoId = nextVideo.id
                this.selectVideo(nextVideo)
            }
        },
        playPrevVideo() {
            const prevVideo = getPrevVideo(this.videoId, this.units)
            if (prevVideo) {
                this.videoId = prevVideo.id
                this.selectVideo(prevVideo)
            }
        },
        onPause() {
            clearInterval(this.historyTimer)
        },
        onPlay() {
            // 视频播放时，记录历史记录
            this.logHistory()
        },
        insertElement() {
            const span = document.createElement('span')
            span.className = 'el-icon-right play-next-icon'
            console.log(span)
            span.onclick = () => {
                this.playNextVideo()
            }
            document
                .querySelector('.vjs-control-bar')
                .insertBefore(
                    span,
                    document.querySelector('.vjs-control-bar').firstChild
                        .nextSibling
                )
        }
    },
    created() {
        clearInterval(this.historyTimer)
    },
    mounted() {},
    destroyed() {
        clearInterval(this.historyTimer)
    }
}
</script>

<style lang="scss">
.watch-menu {
    background: transparent;
    //.ivu-menu {
    //  background: $component-bg-color-2!important;
    //}
}

.watch-config {
    margin-left: 40px;
}

.history-notice {
    p {
        line-height: 1.5;
        font-size: 12px;
    }
}

.play-next-icon {
    line-height: 42px;
    font-size: 20px;
    margin-left: 5px;
    cursor: pointer;
}
</style>
