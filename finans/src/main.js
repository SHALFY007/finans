import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/modal'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
