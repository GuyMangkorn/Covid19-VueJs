import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {store} from './store'
import index from "@/router";
import VueRouter from "vue-router";
import VueNumber from "vue-number-animation";
window.axios = require('axios');
window.numeral = require('numeral')


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueNumber)


new Vue({
  render: h => h(App),
  router:index,
  store:store,
  vuetify
}).$mount('#app')
