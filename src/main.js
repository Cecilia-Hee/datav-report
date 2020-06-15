import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Echarts from 'echarts'
import vueEcharts from 'vue-echarts'
import './styles/common.scss'

Vue.component('v-chart', vueEcharts);

Vue.config.productionTip = false

Vue.prototype.$echarts = Echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
