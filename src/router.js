import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/apps'
  },
  {
    path: '/apps',
    component: resolve => require(['@/components/main.vue'], resolve)
  }
]

export default new VueRouter({
  // 去除#
  mode: 'history',
  routes
})