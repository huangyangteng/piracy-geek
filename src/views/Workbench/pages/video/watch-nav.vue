<template>
    <section>
        <nav class="watch-bar pc">
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
                    v-if="false"
                    v-model="showAside"
                    :active-value="false"
                    :inactive-value="true"
                    active-text="剧场模式"
                    style="margin-right: 20px"
                >
                </el-switch>
                <el-switch
                    v-if="false"
                    v-model="playNextConfig"
                    active-text="自动连播"
                >
                </el-switch>

                <a
                    style="margin-left: 20px;color:#fff"
                    :href="$route.query.link"
                    target="_blank"
                    >源网站</a
                >
            </div>
        </nav>
        <nav class="watch-bar mobile">
            <span
                @click="toHome"
                class="el-icon-arrow-left back-home-icon click-big"
                style="margin-right: 10px"
            ></span>
            <b
                style="white-space: nowrap;max-width: 40vw;overflow: hidden;text-overflow: ellipsis"
            >
                {{ videoTitle }}
            </b>
            <a
                style="margin-left: 20px;color:#fff"
                :href="$route.query.link"
                target="_blank"
                >源网站</a
            >
            <!--          <el-switch v-model="playNextConfig" active-text="自动连播">-->
            <!--          </el-switch>-->
        </nav>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'watch-nav',
    props: {
        videoTitle: {
            type: String
        },
        courseTitle: {
            type: String
        }
    },
    data() {
        return {
            showAside: true
        }
    },
    computed: {
        ...mapState('watch', {
            playNext: state => state.config.playNext
        }),
        playNextConfig: {
            get() {
                return this.playNext
            },
            set(val) {
                this.$store.commit('watch/SET_CONFIG', { playNext: val })
            }
        }
    },
    methods: {
        toHome() {
            this.$router.push({
                path: '/workbench/video',
                query: {
                    category: this.$route.query.category
                }
            })
        }
    },
    created() {}
}
</script>

<style lang="" scoped></style>
