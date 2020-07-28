<template>
    <aside v-show="!isFold">
        <section class="read-logo">
            <a href="#/column-list">Pirated GeekTime</a>
        </section>
        <header class="read-aside-header">
            <i
                @click="toggleOutlineOrMenu"
                class="show-outline"
                :class="iconType"
            ></i>
            <span>{{ showText }}</span>
            <b>
                <OutlineConfig v-if="!showMenu"></OutlineConfig>
            </b>
        </header>
        <transition name="fade">
            <ReadOutline v-if="!showMenu"></ReadOutline>
        </transition>
        <transition name="fade">
            <el-menu
                v-if="showMenu"
                :unique-opened="config.uniqueOpened"
                :default-active="curArticleId"
                class="el-menu-vertical-demo"
                @select="selectArticle"
            >
                <el-submenu
                    :index="item.id"
                    v-for="item in curContents"
                    :key="item.id"
                >
                    <template slot="title">
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item
                        v-for="sub in item.subList"
                        :index="sub.id"
                        :key="sub.id"
                        >{{ sub.title }}</el-menu-item
                    >
                </el-submenu>
            </el-menu>
        </transition>
    </aside>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import ReadOutline from './ReadOutline'
import OutlineConfig from '../Modal/OutlineConfig'
export default {
    components: {
        ReadOutline,
        OutlineConfig
    },
    data() {
        return {
            config: {
                uniqueOpened: true
            },
            showMenu: true
        }
    },
    computed: {
        ...mapState('column', ['curArticleId', 'outlineList']),
        ...mapGetters('column', ['curContents', 'isFold']),
        showText() {
            return this.showMenu ? '目录' : '大纲'
        },
        iconType() {
            if (this.showMenu) {
                return {
                    'el-icon-s-fold': true
                }
            } else {
                return {
                    'el-icon-guide': true
                }
            }
        }
    },
    methods: {
        selectArticle(article) {
            let { column } = this.$route.params
            this.$router.push({ name: 'read', params: { column, article } })
        },
        toggleOutlineOrMenu() {
            this.showMenu = !this.showMenu
        }
    }
}
</script>
<style lang="scss" scoped>
$--color-primary: #fa8919;
.read-logo {
    text-align: center;
    font-size: 32px;
    font-weight: 100;
    cursor: pointer;
    margin: 30px 0;
    transition: 0.5s;
    a {
        font-family: Source Sans Pro, Helvetica Neue, Arial, sans-serif;
        color: #364149;
        text-decoration: none;
        &:hover {
            color: $--color-primary;
        }
    }
}
.read-aside-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 10px;
    > i {
        cursor: pointer;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
