import Vue from 'vue'
import VueRouter from 'vue-router'

import test from './components/test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: test },
  { path: '/bar', component: test }
]

export default new VueRouter({
    routes:routes 
})