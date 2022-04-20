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
                            'https:\\/\\/xy115x202x128x57xy.mcdn.bilivideo.cn:4483\\/upgcxcode\\/52\\/22\\/23902252\\/23902252_da5-1-64.flv?e=ig8euxZM2rNcNbNghbdVhwdlhbNghwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1650258387&gen=playurlv2&os=mcdn&oi=2030413803&trid=0000ebf07f5f1a72477885f7d56ae93ee322u&platform=pc&upsig=0a5327e4679a1b461c621ae27dce8e06&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mcdnid=9001579&mid=35056091&bvc=vod&nettype=0&orderid=0,3&agrr=1&bw=222511&logo=A0000100'
                    },
                    // {
                    //     withCredentials: false,
                    //     type: 'application/x-mpegURL', //这里的type需要指定为 'application/x-mpegURL'
                    //     src:
                    //         'https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/6ceefe139de43631-39e9ed8fc0c579bbb5146fdb7756c70f-hls_540p_2.m3u8?pkey=ABCFuKvJsoqn8LywMfh_r7I-2rOUHHmgHwcVfRK35sjDF9EUlAPzu_Y_FP88zWG_thMPLYn0ZzoPkAUrAFfZiGHYI1xHPUNgARuNFvbVW-9uIni960MuMSEn4HZQiLZ4e6Ps2BlCVXB06RUPKCGZD6s1dB06Tjaun2QhwrqTYlHYqjRrOAo_Hlic_BN3pu2R9m4TkiPsHKS8PNXoowsPPcRRYgzq6ajKS-4QdTw9-LeQ0Q&safety_id=AAJS_EVsejahTktRVmRdgBox'
                    // }
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
