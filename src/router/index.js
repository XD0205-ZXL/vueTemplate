import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../page/$emit.vue'
// import DemoPage from '../page/demoPage.vue'
import UsePage from '../page/usePage.vue'

import Radio from "../components/radio.vue"; 
import Checkbox from "../components/checkBox.vue";
import searchSelect from "../components/searchSelect.vue";
import newSelect from "../components/newSelect/newSelect.vue";

import ShuttleBox from "../components/shuttleBox.vue"

// import configRouters from "../components/index.js"
import Ztable from "../components/table/table.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/usePage',
      name:'UsePage',
      component:UsePage
    },
    {
      path:'/ztable',
      name:'Ztable',
      component:Ztable
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
    },
    {
      path:'/newSelect',
      name:'newSelect',
      component:newSelect
    }

  ]
})
