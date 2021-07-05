import store from './store'
import router from './router'
import Axios from 'axios'
import Layout from "./Layout";
import BootstrapVue from "bootstrap-vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

const app = new Vue({
    el: '#app',
    render: h => h(Layout),
    store,
    router
});
