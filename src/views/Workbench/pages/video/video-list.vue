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
                @click="jumpToCourse(item.id)"
                v-for="item in courses"
                :key="item.id"
            >
                <section>
                    <video
                        @mouseenter="onMouseEnter"
                        @mouseleave="onMouseLeave"
                        loop
                        :src="getVideoSrc(item)"
                    ></video>
                </section>
                <footer>{{ item.title }}</footer>
            </div>
        </section>
    </section>
</template>

<script>
import { videoCategory } from '../../../../data/video/video-list'
import { formatSrc } from '../../../../tools/video-tools'
import { isVideo, getExt } from '../../../../tools/index'
import { WATCH_API } from '../../../../api/video'

export default {
    name: 'video-list',
    data() {
        return {
            activeCategory: videoCategory[0].name,
            categories: videoCategory,
            list: []
        }
    },
    computed: {
        courses() {
            console.log(this.list)
            return this.list.find(item => item.type === this.activeCategory)
                ?.list
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
            const res = await WATCH_API.getList()
            if (res.code == 2000) {
                this.list = res.data
            }
        },
        jumpToCourse(id) {
            this.$router.push({
                name: 'watch',
                params: {
                    id: id
                }
            })
        }
    },
    created() {}
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

        video {
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