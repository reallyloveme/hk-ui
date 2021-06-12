/*
 * @Author: your name
 * @Date: 2021-06-12 14:53:28
 * @LastEditTime: 2021-06-12 16:06:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hk-common/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import HkUI from '../packages'
import 'element-ui/lib/theme-chalk/index.css'
// import '../packages'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(HkUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
