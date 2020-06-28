<template>
    <div class="pagingContnt">
        <ul>
            <li><span>总条数:{{count}}</span></li>
            <li><tmdButton type="info" value="上一页" @click="getPreData"></tmdButton></li>
            <li><tmdButton type="info" value="下一页" @click="getNextData"></tmdButton></li>
            <li>当前页:{{curPage}}/{{totle}}</li>
            <li>跳到：<input v-model="goNum" @keyup="checkVal"/></li>
            <li><tmdButton type="create" value="确定" @click="gotoNum"></tmdButton></li>
        </ul>
    </div>
</template>

<script>
import tmdButton from "./button.vue";
export default {
    props:['count','totle','curPage'],
    components:{tmdButton},
    data(){
        return {
            goNum:''
        }
    },
    methods:{
        gotoNum:function(){
            this.$emit("getAppointDatas",this.goNum)
        },
        getPreData:function(){
            this.$emit("getPreDatas")
        },
        getNextData:function(){
            this.$emit("getNextDatas")
        },
        checkVal:function(){
            let reg = /^[1-9]*[1-9][0-9]*$/;
            debugger
            if(reg.test(this.goNum)){
                if(this.goNum > this.totle ){
                    this.goNum = this.totle;
                }
            }else{
                this.goNum = "";
            }
        }

    }
}
</script>

<style scoped>
.pagingContnt{
    width: 100%;
    min-height: 100px;
}
.pagingContnt li{
    float: left;
    margin: 0 5px;
    vertical-align: center;
}
</style>