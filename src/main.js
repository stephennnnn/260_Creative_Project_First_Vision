import Vue from 'vue'
import App from './App.vue'
import router from './router'
import art from './art-data.js'

Vue.config.productionTip = false

let data = {
  data: art,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
