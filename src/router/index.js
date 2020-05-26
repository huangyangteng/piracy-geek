import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeConfig from '../views/Home/index'
import TipConfig from '../views/Tip/index'
import TestConfig from '../views/Test/index'
Vue.use(VueRouter)

const routes = [...HomeConfig, TipConfig, TestConfig]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
