import Vue from 'vue'
import App from './App.vue'
import './rem'
// import store from './store.js'
import store from './store/index.js'
import echarts from 'echarts';
Vue.config.productionTip = false

 Vue.prototype.$echarts = echarts;
// Vue.use(echarts)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
