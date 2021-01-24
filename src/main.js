import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/element-ui-config'
import './assets/css/common.scss'
import './assets/css/article.scss'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
