import Vue from 'vue'
import Router from 'vue-router'
import SiteIndex from '@/pages/siteIndex/siteIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiteIndex',
      component: SiteIndex
    }
  ]
})
