<template>
    <section class="bench-sidebar">
        <header></header>
        <section>
            <div class="sidebar-item" v-for="m in menus" :key="m.name">
                <h5>{{ m.name }}</h5>
                <p
                    @click="toPage(item.route)"
                    v-for="item in m.children"
                    :key="item.name"
                >
                    {{ item.name }}
                </p>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'bench-sidebar',
    data() {
        return {
            menus: [
                {
                    name: 'MY COLUMN',
                    children: [
                        { name: 'COLUMN LIST', route: '/workbench/column' },
                        {
                            name: 'RECENT COLUMN',
                            route: '/workbench/recent-column'
                        }
                    ]
                },
                {
                    name: 'MY MUSIC',
                    children: [
                        { name: 'MUSIC LIST', route: '/workbench/music' },
                        {
                            name: 'RECENT MUSIC',
                            route: '/workbench/recent-music'
                        }
                    ]
                },
                {
                    name: 'MY VIDEO',
                    children: [
                        { name: 'VIDEO LIST', route: '/workbench/video' },
                        { name: 'RECENT VIDEO', route: '/workbench/recent-video' }
                    ]
                },
                {
                    name: 'MY TOOLS',
                    children: [
                        { name: 'TOOLS LIST', route: '/workbench/tools' }
                    ]
                }
            ]
        }
    },
    computed: {},
    methods: {
        toPage(link) {
            if (this.$route.path == link) return
            this.$router.push({ path: link })
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped>
.bench-sidebar {
    > header {
        height: 40px;
    }
}
.sidebar-item {
    margin-bottom: 30px;
    > h5 {
        font-size: 12px;
        color: $color-help !important;
        margin-bottom: 12px;
    }
    > p {
        font-size: 14px;
        line-height: 2;
        padding-left: 30px;
        cursor: pointer;
    }
}
</style>
