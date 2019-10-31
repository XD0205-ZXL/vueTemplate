import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/$emit.vue'
import DemoPage from '../components/demoPage.vue'
import UsePage from '../components/usePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/demoPage',
      name:DemoPage,
      component:DemoPage
    },
    {
      path:'/usePage',
      name:UsePage,
      component:UsePage
    }
  ]
})
