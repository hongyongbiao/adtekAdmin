import Vue from 'vue'
import App from './App'
//router
import router from './router/index'
//vuex
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.component('ImgInputer', ImgInputer)

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})