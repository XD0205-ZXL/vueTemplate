import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/$emit.vue'
import DemoPage from '../components/demoPage.vue'
import UsePage from '../components/usePage.vue'

import Radio from "../components/radio.vue"; 
import Checkbox from "../components/checkBox.vue";
import searchSelect from "../components/searchSelect.vue";

import ShuttleBox from "../components/shuttleBox.vue"


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
      name:'DemoPage',
      component:DemoPage
    },
    {
      path:'/usePage',
      name:'UsePage',
      component:UsePage
    },

    {
      path:'/radio',
      name:'Radio',
      component:Radio
    },
    {
      path:'/checkbox',
      name:'Checkbox',
      component:Checkbox
    },
    {
      path:'/searchSelect',
      name:'searchSelect',
      component:searchSelect
    },
    {
      path:'/ShuttleBox',
      name:'ShuttleBox',
      component:ShuttleBox
    }

  ]
})
