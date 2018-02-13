// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store/index.js'

import 'mint-ui/lib/style.css'
import './common/stylus/index.styl'
import VueTouch from 'vue-touch'
import 'babel-polyfill'
import _promise from 'es6-promise'

_promise.polyfill()
import axios from 'axios'

Vue.config.productionTip = false
global.storage = window.localStorage;

// 默认设置axios请求
// axios.default.baseUrl = 'http://192.168.0.123:1111/' //设置默认请求的前缀
axios.defaults.withCredentials = true //允许跨域
global.axios = axios //设置为全局引用

// Vue.prototype.$http = axios //在vue的原型链上添加axios
Vue.config.productionTip = false
Vue.config.debug = true;
Vue.use(MintUI)
Vue.use(VueTouch, { name: 'v-touch' })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})