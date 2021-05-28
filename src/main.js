import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.less'

import Vant from 'vant'
import 'vant/lib/index.css'

// 自动设置 REM 基准值
import 'amfe-flexible'

// 全局注册 Vant 中的组件
Vue.use(Vant)
Vue.config.productionTip = false

// 创建 Vue 根实例，将 router、store 配置到根实例中
// 将 App 根组件渲染到 #app 节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
