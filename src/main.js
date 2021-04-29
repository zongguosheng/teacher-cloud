import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import '@/styles/index.scss' // global css
import 'minireset.css/minireset.min.css' // 样式重置
// import './styles/element-variables.scss'
// import '@riophae/vue-treeselect/dist/vue-treeselect.css' // vue-treeselect.css
import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import '@/plugins/vxeTable'
import '@/components' // 全局组件引入
import '@/plugins/dayjs'

// import { getImgUrl, server } from '@/plugins/axios'
import { sexOptions } from '@/lib/otions'
import formatFileSize from '@/utils/formatFileSize'
// import { getPcaName } from '@/lib/pca'
import Cookies from 'js-cookie'
import _ from 'lodash'
import axios from '@/utils/axios'
// import TreeSelect from '@riophae/vue-treeselect'
// import treeTransfer from 'el-tree-transfer' // 树穿梭框
export const getLabel = (options, value) => _.get(_.find(options, { value }), 'label', '-')
export const getLabelV = options => ({ cellValue: value }) => _.get(_.find(options, { value }), 'label', '-')
Vue.prototype.$getLabel = getLabel
Vue.prototype.$getLabelV = getLabelV
Vue.prototype.axios = axios
Vue.prototype._ = _
window._ = _
Vue.prototype.$log = console.log
Vue.prototype.$back = async() => {
  await store.dispatch('tagsView/delView', router.app.$route)
  router.back()
}

Vue.filter('ymd', val => (val ? dayjs(val).format('YYYY-MM-DD') : ''))
Vue.filter('ymdhm', val => (val ? dayjs(val).format('YYYY-MM-DD HH:mm') : ''))
Vue.filter('ymdhms', val => (val ? dayjs(val).format('YYYY-MM-DD HH:mm:ss') : ''))
Vue.filter('sex', val => getLabel(sexOptions, val))
Vue.filter('fileSize', val => formatFileSize(val))
// Vue.filter('pcaName', val => (val ? getPcaName(val) : ''))
// eslint-disable-next-line no-unused-vars
// Vue.prototype.$hasPower = e => {
//   if (process.env.NODE_ENV === 'development' && localStorage.getItem('ignorePermissions') === 'true') {
//     return true
//   } else {
//     const list = [...store.state.userPower.power]
//     const status = list.includes(e)
//     return status
//   }
// }
import * as filters from './filters' // global filters
// Vue.component('treeTransfer', treeTransfer)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
