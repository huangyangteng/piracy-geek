<template>
    <section>
        <video-player @error="onError" :options="options"></video-player>
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
                            'https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/21e65ea9f60c7843-2f9fe3601f70d0fa06ef2ea056ea3a74-hls_540p_2.m3u8?pkey=ABDYtI82y-1DM88AwskmRQPYI0XU5otepXxKirOO0v9_6yJQVpDklKloXVZbzm7FBg4Bnsj_elL-qfR0t-I2O4p-2ASZNHznOpT8Tc-7kkjLGorWvfW-f0n739l_bzNoSXvAeUymtU5iLlIagYuL0s_M1fnn7mAgtg_gwq2p4Fk68MuOyDB2Y7WrRkfvd-bFgJ4RSMutJI7Hb6mx4Sltf3HMJo0h5D6jzwtLfIfwHuX-LA&safety_id=AAJLGUuYT4vU9J_6eC08shwW'
                    }
                ],
                hls: true
            }
        }
    },
    computed: {},
    methods: {
        onError(e) {
            console.log(e, 'error')
        }
    },
    created() {}
}
</script>

<style lang="" scoped></style>
