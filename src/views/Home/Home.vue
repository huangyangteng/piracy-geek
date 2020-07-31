<template>
    <section class="hyt-blog">
        <nav></nav>
        <header>
            MY ZONE
        </header>
        <section>
            <a
                v-for="item in prodList"
                :key="item.href"
                :href="item.href"
                class="blog-prod-item"
            >
                <h2>{{ item.title_en }}</h2>
                <img :src="item.img" alt="" />
                <div style="color:#1f1f1f">{{ item.title }}</div>
            </a>
        </section>
        <footer>
            My Zone<br />
            All Rights Reserved ©2020
        </footer>
    </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            prodList: [
                {
                    title_en: 'LEARNING RESOURCES',
                    title: '前端学习资源（极客时间）',
                    img: require('../../assets/imgs/clip-education-1.png'),
                    href: '#/column-list'
                },
                {
                    title_en: 'MAC WORK ENVIRONMENT',
                    title: '打造MAC高效开发环境',
                    img: require('../../assets/imgs/gummy-macbook.png'),
                    href: 'mac/'
                },
                {
                    title_en: 'KNOWLEDGE ARCHITECTURE',
                    title: '构建前端知识架构',
                    img: require('../../assets/imgs/cyborg-3.png'),
                    href: 'render-page/'
                }
            ]
        }
    },
    computed: {
        ...mapState('lastRead', ['lastColumnId'])
    },
    methods: {},
    created() {
        // let lastColumn = this.lastColumnId
        // let lastArticle = this.$store.getters['lastRead/getLastArticleId'](
        //     this.lastColumnId
        // )
        // // 如果不存在历史记录
        // if (!lastColumn || !lastArticle) {
        //     lastColumn = 'chongxueqianduan'
        //     lastArticle = 'YO5vkhdcI9w2rXac'
        // }
        // // 如果存在历史记录，跳转到Read.vue组件
        // this.$router.push({
        //     name: 'read',
        //     params: {
        //         column: lastColumn,
        //         article: lastArticle
        //     }
        // })
    }
}
</script>
<style lang="scss" scoped>
.hyt-blog {
    padding: 40px;
    > header {
        text-align: center;
        font-size: 15vw;
        font-weight: 800;
        border-bottom: 2px solid #000;
    }
    > section {
        display: flex;
        margin-top: 120px;
    }
    > footer {
        text-align: center;
        margin-top: 120px;
        font-size: 2vw;
    }
}
.blog-prod-item:last-child {
    margin-right: 0;
}
.blog-prod-item {
    text-decoration: none;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    > h2 {
        text-align: center;
        font-size: 4.3vw;
        color: #1f1f1f;
        line-height: 1.1;
        font-weight: 400;
    }
    > img {
        width: 100%;
    }
}
</style>
