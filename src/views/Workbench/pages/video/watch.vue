<template>
    <section class="watch-wrapper">
        <nav class="watch-bar">
            <h1 @click="toHome">
                <i class="el-icon-arrow-left back-home-icon"></i>
                <span>{{ courseTitle }}</span>
                <b>
                    /
                </b>
                {{ videoTitle }}
            </h1>
            <span></span>
            <span></span>
        </nav>
        <section class="watch-container" :style="watchContainerStyle">
            <section class="play-container" :style="videoStyle">
                <video-player
                    ref="videoPlayer"
                    class="video-player vjs-custom-skin"
                    :options="playerOptions"
                    @ready="playerIsReady"
                    @play="onPlay"
                    @pause="onPause"
                    @ended="onEnded"
                ></video-player>
                <div v-if="false" class="video-info" :style="videoInfoStyle">
                    <section>
                        <h1 style="margin-right:20px">
                            {{ courseTitle }}
                        </h1>
                        <h2>
                            {{ videoTitle }}
                        </h2>
                    </section>

                    <aside>
                        <Tooltip
                            v-if="true"
                            content="返回主页"
                            style="margin-right:16px"
                        >
                            <Icon @click="toHome" type="ios-home" />
                        </Tooltip>
                        <KeyboardTip v-if="false" style="margin-right:16px">
                            <Icon type="md-bulb" />
                        </KeyboardTip>
                        <Tooltip content="剧场模式" style="margin-right:16px">
                            <Icon @click="expand" type="ios-qr-scanner" />
                        </Tooltip>
                        <Tooltip content="上一个" style="margin-right:16px">
                            <Icon @click="playPrevVideo" type="ios-rewind" />
                        </Tooltip>
                        <Tooltip content="下一个" style="margin-right:16px">
                            <Icon
                                @click="playNextVideo"
                                type="ios-fastforward"
                            />
                        </Tooltip>
                        <video-config></video-config>
                    </aside>
                </div>
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
    download
} from '../../../../tools/video-tools'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'videojs-hotkeys'
import KeyboardTip from '../../components/video/keyboard-tip'
import OutlineList from '../../components/video/outline-list'
import NoteList, { OPERATE } from '../../components/video/note-list'
import VideoConfig from '../../components/video/video-config.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
import { WATCH_API } from '../../../../api/video'
import { WATCH_MU } from '../../../../store/mutation-types'

export default {
    name: 'watch',
    components: {
        videoPlayer,
        KeyboardTip,
        OutlineList,
        NoteList,
        VideoConfig
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
            nextTimer: 0 //播放下一个的倒计时
        }
    },
    computed: {
        ...mapState('watch', ['notes', 'history']),
        ...mapGetters(['isLight']),
        ...mapState('watch', {
            playNext: state => state.config.playNext
        }),
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
                    height: `calc(100vh - 160px)`,
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
        }
    },
    watch: {
        videoSize() {
            this.playerOptions.height = this.videoSize.height
        },
        '$route.params.id': {
            //课程id，根据课程id获取数据
            immediate: true,
            handler(id) {
                if (id) {
                    this.courseId = id
                    this.queryCourseById(id)
                }
            }
        },
        '$route.query.videoId'(videoId) {
            //视频id,切换侧边栏时触发
            const src = getSrcById(videoId, this.units)
            this.playVideo(src, true)
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
                this.showHistory()
            }
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
        _jumpToPlay(videoId) {
            console.log('_jumpToPlay -> videoId', videoId)
            if (!videoId) videoId = this.videoId
            this.$router.push({
                name: 'watch',
                params: { id: this.courseId },
                query: { videoId: videoId }
            })
        },
        selectVideo(str) {
            //选中侧边栏时的操作
            const [id, src] = str.split('&')
            this.videoId = id

            // 如果src后缀是视频，则播放，否则下载
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
        },
        playVideo(src = null, autoplay = false) {
            if (!src) {
                src = this.curVideo.src
            }
            src = window.location.origin + '/' + src
            this.playerOptions.sources[0].src = src
            if (autoplay) {
                this.playerOptions.autoplay = true
            }
            // 设置title
            document.title = this.curVideo.name
        },
        playerIsReady(player) {
            this.insertElement()
            // 跳转到上次播放的位置
            const item = this.history.find(item => item.videoId == this.videoId)
            if (item) {
                this.player.currentTime(item.currentTime)
            }

            player.hotkeys({
                volumeStep: 0.1,
                seekStep: 5,
                enableModifiersForNumbers: false,
                captureDocumentHotkeys: true,
                documentHotkeysFocusElementFilter: e =>
                    e.tagName.toLowerCase() === 'body'
            })
        },
        toHome() {
            this.$router.push({
                path: '/workbench/video'
            })
        },
        logHistory() {
            this.historyTimer = setInterval(() => {
                if (this.player && this.player.currentTime) {
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

            const nextVideo = getNextVideo(this.videoId, this.units)
            if (nextVideo) {
                this.videoId = nextVideo.id
                setTimeout(() => {
                    this._jumpToPlay(nextVideo.id)
                }, 1000)
            }
        },
        playNextVideo() {
            const nextVideo = getNextVideo(this.videoId, this.units)
            if (nextVideo) {
                this.videoId = nextVideo.id
                this._jumpToPlay(nextVideo.id)
            }
        },
        playPrevVideo() {
            const prevVideo = getPrevVideo(this.videoId, this.units)
            if (prevVideo) {
                this.videoId = prevVideo.id
                this._jumpToPlay(prevVideo.id)
            }
        },
        onPause() {
            clearInterval(this.historyTimer)
        },
        onPlay() {
            // 视频播放时，记录历史记录
            this.logHistory()
        },
        changeTheme() {
            // this[GLOBAL_MU.TOGGLE_THEME](theme)
            // setTheme(theme)
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
    mounted() {
        // setTimeout(() => {
        //     const bar = document.querySelector('.vjs-control-bar')
        //     console.log(bar)
        // }, 3000)
    },
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