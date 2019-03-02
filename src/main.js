import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vue2Filters from 'vue2-filters'
Vue.use(require('vue-moment'))

Vue.use(Vue2Filters)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
