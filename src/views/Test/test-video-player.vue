<template>
    <section>
        <video-player :options="options"></video-player>
    </section>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

import videojs from 'video.js'
//需要引入videojs并绑定到window上
window.videojs = videojs
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
export default {
    name: 'test-video-player',
    components: {
        videoPlayer
    },
    data() {
        return {
            options: {
                autoplay: false,
                height: '720',
                playbackRates: [0.7, 1.0, 1.25, 1.5, 2.0],
                sources: [
                    {
                        withCredentials: false,
                        type: 'application/x-mpegURL', //这里的type需要指定为 'application/x-mpegURL'
                        src:
                            'https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/47252fc26243b079-e992c6c3928c6be2dcb2426c2743ceca-hls_720p_2.m3u8?pkey=ABDuFNTOUnsfYOEZC286rORZhpfh5uaNeFhzffUnwTFoS8-3NBSQEvWcqdKGtIRMgiywklkZvPdU-2avzKUT-I738UJX6urdwxy_ZHp617win7G6ga30Lfvfp2AyAVoUMjhVkiCnKeObrMEPVn4x749wFaigz-mPaWPGAf5uVvR0kbkVIw6x-HZTlgyY6tj-eE_rVnxHvB1XJ01_JhXMVWh70zlJ89EL2wsdPfhrgeLCWQ&safety_id=AAKir561j0mZgTqDfijAYjR6'
                    }
                ],
                hls: true
            }
        }
    },
    computed: {},
    methods: {},
    created() {}
}
</script>

<style lang="" scoped></style>
