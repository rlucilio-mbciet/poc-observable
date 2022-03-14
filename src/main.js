import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

Vue.use({
  install(Vue) {
    Vue.$Store = store
    Vue.prototype.$Store = store
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
