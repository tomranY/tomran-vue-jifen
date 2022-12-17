import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import '@/assets/css/global.css'
Vue.prototype.imgUrl='http://sc.wolfcode.cn/'//定义全局属性
Vue.config.productionTip = false
//引入滑块验证
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
