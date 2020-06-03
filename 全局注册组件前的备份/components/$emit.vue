<template>
    <div>
        <p class="pageName">$emit 自定义事件</p>
        <div class="content">
            <h3 class="title">测试vue的自定事件</h3>
            <div>
                <!-- <test-com @getCityName="sayCityName"></test-com> -->
                <test-com @input="showAlert" @showName="shwoNames" v-model="fatherName"></test-com>
                <p>{{vmodelName}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component("test-com",{
    props:["value"],
    data(){
        return {
            cityNmae:"山西 大同"
        }
    },
    // template:`<button @click="returnCityNameToFa">点击触发子组件的事件</button>`,
    template:'<div><input ref="demo" @input="returnName" type="text" :value="value"/></div>',
    methods:{
        returnCityNameToFa(){
            let data = this.cityNmae;
            this.$emit("getCityName",data)
        },
        returnName(event){
            this.$emit("showName",this.$refs.demo.value)
        }
    }
})

export default {
    nameSpace:'$emit自定义事件',
    data(){
        return {
            dataArr:[
                {name:'测试数据1',val:'1'},
                {name:'测试数据1',val:'2'},
                {name:'测试数据1',val:'3'},
                {name:'测试数据1',val:'4'},
                {name:'测试数据1',val:'5'},
            ],
            fatherName:'曾经沧海难为水 除却巫山不是云',
            vmodelName:''
        }
    },
    methods:{
        sayCityName(data){
            alert("我从自己处获取到的城市名称是"+data)
        },
        shwoNames(val){
            this.vmodelName = val;
        },
        showAlert(){
            alert("点击了")
        }
    }
}
</script>

<style scoped>

</style>