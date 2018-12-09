import Vue from 'vue'
import Router from 'vue-router'
import SiteCount from '@/pages/siteCount/siteCount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiteCount',
      component: SiteCount
    }
  ]
})
