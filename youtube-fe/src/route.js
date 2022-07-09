import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './components/Homepage.vue'
import Discover from './components/Discover.vue'
import Watch from './components/Watch.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
  ]
})
