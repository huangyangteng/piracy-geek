import Vue from 'vue'
import VueRouter from 'vue-router'
import ReadConfig from '../views/Home/index'
import TipConfig from '../views/Tip/index'
import TestConfig from '../views/Test/index'
import ColumnList from '../views/ColumnList/index'
import Tools from '../views/Tools/index'
import workbench from '../views/Workbench/index'
Vue.use(VueRouter)

const routes = [
    ...workbench,
    ...ReadConfig,
    ...ColumnList,
    ...Tools,
    TipConfig,
    TestConfig
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
