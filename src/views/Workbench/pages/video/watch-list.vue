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
        </section>
        <section class="course-list">
            <div
                class="course-item"
                @click="jumpToCourse(item)"
                v-for="item in courses"
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
                </section>
                <footer>{{ item.title ? item.title : item.name }}</footer>
            </div>
        </section>
    </section>
</template>

<script>
import { videoCategory } from '../../../../data/video/video-list'
import { formatSrc } from '../../../../tools/watch-tools'
import { isVideo, getExt } from '../../../../tools/index'
import { WATCH_API } from '../../../../api/watch'

export default {
    name: 'watch-list',
    data() {
        return {
            activeCategory: videoCategory[0].name,
            categories: videoCategory,
            list: [],
            bbList: []
        }
    },
    computed: {
        courses() {
            console.log(this.list)
            let local = this.list.find(
                item => item.type === this.activeCategory
            )?.list
            if (!local) {
                local = []
            }
            let bb = this.bbList.filter(
                item => item.type === this.activeCategory
            )
            return bb.concat(local)
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
        selectCategory(item) {
            this.$router.push({
                name: this.$route.name,
                query: { category: item.name }
            })
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
            const bbRes = await WATCH_API.getBBVideos()
            const res = await WATCH_API.getList()
            if (res.code == 2000) {
                this.list = res.data
                this.bbList = bbRes.data
            }
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
                        type: 'bb'
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

    > section {
        height: 200px;
        // background: $component-bg-color;
        border-radius: 10px;

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
