import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeConfig from '../views/Home/index'
import TipConfig from '../views/Tip/index'
import TestConfig from '../views/Test/index'
import ColumnList from '../views/ColumnList/index'
Vue.use(VueRouter)

const routes = [...HomeConfig, ColumnList, TipConfig, TestConfig]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
