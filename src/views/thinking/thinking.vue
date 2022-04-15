<template>
    <star-bg class="thinking-wrapper  animate__animated animate__fadeIn">
        <section class="thinking-content">
            <nav class="thinking-nav">
                <h1>
                    Write down your thoughts
                    <i
                        class="el-icon-refresh click-big animate__fadeInLeft animate__animated delay-4s"
                        style="color:#fff"
                    ></i>
                </h1>
                <el-input
                    v-model="searchKey"
                    class="search"
                    style="width: 220px"
                    prefix-icon="el-icon-search"
                    size="mini"
                ></el-input>
            </nav>
            <add-notes></add-notes>
            <section class="note-list">
                <note-item
                    v-for="item in notes"
                    :note="item"
                    :key="item.id"
                ></note-item>
            </section>
        </section>
    </star-bg>
</template>

<script>
import AddNotes from '../Workbench/components/video/add-notes'
import NoteItem from '../Workbench/components/video/note-item'
import StarBg from './star-bg'

export default {
    name: 'thinking',
    components: { StarBg, NoteItem, AddNotes },
    data() {
        return {
            searchKey: '',
            notes: [
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                },
                {
                    currentTime: 20,
                    date: '2020-11-22 03:04:05',
                    value: `帘外雨潺潺，春意阑珊，罗衾不耐五更寒。梦里不知身是客，一晌贪欢。独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。`
                }
            ]
        }
    },
    computed: {},
    methods: {},
    created() {}
}
</script>
<style lang="scss">
.thinking-nav {
    input {
        background: $component-bg-color;
    }
}
</style>
<style lang="scss" scoped>
.thinking-wrapper {
    overflow: hidden;
}

@keyframes textFade {
    from {
        background-position-x: 100%;
    }

    to {
        background-position-x: 0%;
    }
}

.thinking-content {
    max-width: 960px;
    margin: 0 auto;
    height: 100vh;
    padding: 20px 10px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
}

.thinking-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .search {
    }

    h1 {
        font-size: 14px;
        white-space: nowrap;
        letter-spacing: 0.3px;
        background-image: linear-gradient(
            75deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 33.33%,
            rgba(255, 255, 255, 0) 66.67%,
            rgba(255, 255, 255, 0) 100%
        );
        background-size: 300% 100%;

        background-clip: text;
        -webkit-background-clip: text;
        color: transparent !important;
        animation: 2s textFade ease-in-out;
        background-position-x: 0%;
    }
}

.note-list {
    margin-top: 30px;
    height: calc(100vh - 100px);
    overflow-y: auto;
}
</style>
