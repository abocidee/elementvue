import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(vuerouter)
new Vue({
  render: h => h(App)
}).$mount('#app')
