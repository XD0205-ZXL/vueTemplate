import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../page/$emit.vue'
import UsePage from '../page/usePage.vue'
import Radio from "../components/radio.vue"; 
import Checkbox from "../components/checkBox.vue";
import searchSelect from "../components/searchSelect.vue";

import ShuttleBox from "../components/shuttleBox.vue";



import TmdSelect from "../components/newSelect/usePages.vue";
import TmdTable from "../components/table/useTable.vue";





Vue.use(Router)
export default new Router({
  routes: [
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
    },


    {
      path : '/TmdSelect',
      name : 'TmdSelect',
      component : TmdSelect
    },
    {
      path :'/TmdTable',
      name :'TmdTable',
      component : TmdTable
    }
   

  ]
})
