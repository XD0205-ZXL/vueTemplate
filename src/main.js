// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ComponentsArr from "./components/index.js"
import AjaxService from "../core/fetch-install.js";

Vue.config.productionTip = false
Vue.use(ComponentsArr);
Vue.use(AjaxService);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
