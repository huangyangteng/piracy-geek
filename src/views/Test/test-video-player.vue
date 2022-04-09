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
                            'https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/6ceefe139de43631-7c177e159c09beba9c16f3b68430d47a-hls_720p_2.m3u8?pkey=ABD5pLAfLCl9On5tEcmSFDp1DWp8LYi4D44cVXwZGmZwPCWpx3FfJebRd6Zy7O__GTqFuGVk5pamtUt2gU4BwPdGmKCoutd_Q4GEb_pUiwzQLEBl_PEM2ooiDFxX4ORpSSCPhe8-AGhQzoFrycgBlS0zoTB1ck8Kpu43YBM2a15yICi69wM6VP_w4L2XUsZqm7Giqjpq00xg4JiSesGeVwwma3-Hq66D8WLGlZhzCSSnYg&safety_id=AAJS_EVsejahTktRVmRdgBox'
                    },
                    {
                        withCredentials: false,
                        type: 'application/x-mpegURL', //这里的type需要指定为 'application/x-mpegURL'
                        src:
                            'https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/6ceefe139de43631-39e9ed8fc0c579bbb5146fdb7756c70f-hls_540p_2.m3u8?pkey=ABCFuKvJsoqn8LywMfh_r7I-2rOUHHmgHwcVfRK35sjDF9EUlAPzu_Y_FP88zWG_thMPLYn0ZzoPkAUrAFfZiGHYI1xHPUNgARuNFvbVW-9uIni960MuMSEn4HZQiLZ4e6Ps2BlCVXB06RUPKCGZD6s1dB06Tjaun2QhwrqTYlHYqjRrOAo_Hlic_BN3pu2R9m4TkiPsHKS8PNXoowsPPcRRYgzq6ajKS-4QdTw9-LeQ0Q&safety_id=AAJS_EVsejahTktRVmRdgBox'
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
