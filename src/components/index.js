

//  如果每一个组件否有一个注册的js文件的话就用这种方式  ，如果是一起在同一个js中注册的话就不用这种方式了
// var files = require.context(".",false,/\.vue$/);
// var configRoutersarr = [];
// files.keys().forEach(key => {
//     console.log(files(key))
//     configRoutersarr = configRoutersarr.concat(files(key).default)
// })
// console.log(configRoutersarr)
// export default configRoutersarr

import ZButton from "./button.vue";
import ZCheckbox from "./checkBox.vue";
import ZInput from "./input.vue";
import ZSelect from "./select.vue";
import ZRadio from "./radio.vue";
import ZSearchSelect from "./searchSelect.vue";
import ZShuttleBox from "./shuttleBox.vue";
import zTable from "./table/table.vue";

export default {
    install:function(Vue){
        Vue.component('ZButton',ZButton);
        Vue.component('ZCheckbox',ZCheckbox);
        Vue.component('ZInput',ZInput);
        Vue.component('ZSelect',ZSelect);
        Vue.component('ZRadio',ZRadio);
        Vue.component('ZSearchSelect',ZSearchSelect);
        Vue.component('ZShuttleBox',ZShuttleBox);
        Vue.component('zTable',zTable)
    }
}


