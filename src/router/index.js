import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeConfig from '../views/Home/index'

Vue.use(VueRouter)

const routes = [...HomeConfig]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
