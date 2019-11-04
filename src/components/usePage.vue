<template>
    <div style="height:100%">
        <p class="pageName">使用组件的集合</p>
        <div class="templateBox">
            <div class="template-item">
                <h3 class="templateName">input组件的使用:</h3>
                <zInput label="剧名:" @click="clickVal" @blur="alertVal" labelWidth="120" v-model="defaultName" placeholder="请输入剧名"></zInput>
                <p>{{"使用v-model后的值:" + defaultName}}</p>
            </div>
            <div class="template-item">
                <h3 class="templateName">select组件的使用:</h3>
                
            </div>
        </div>
    </div>
</template>

<script>
import zInput from "./input.vue";
export default {
    components:{zInput},
    data(){
        return {
            defaultName:'陈情令:'
        }
    },
    methods:{
        alertVal(val){
            alert("blur事件 -- > 当前输入得值是 :  "+val)
        },
        clickVal(val){
            alert("click事件 -- > 当前输入得值是 :  "+val)
        }
    },
    mounted(){
       
    }
}
</script>

<style scoped>
.templateBox{
    background-color: #fff;
    margin-bottom: 50px;
}

.template-item{
    min-height: 200px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    /* box-shadow: 0px 0px 12px pink; */
    border-bottom: 1px solid pink;
}
</style>