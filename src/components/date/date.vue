<template>
    <!-- 
        1. input中展示 v-model中的value值 ，并且支持在这里修改选择的日期
        2. 展示所有的当前月的日期，上月和下月的日期为disabled状态
        3. 获取 上一 年和月 ， 下一  年和月
        4. 清空当前选中的月份，然后在默认选中当前日期
     -->
    <div>
        <label class="label" :style="{'width':labelWidthTag}">{{label}}</label>
        {{curDateNum}}
        <div class="date">
            <!-- 日期组件输入部分 -->
            <div class="dateContent">
                <i class="fl icon-date fa fa-calendar"></i>
                <input type="text" class="dateInput"/>
                <i class="fr fa fa-times-circle icon-del" style=""></i>
            </div>
            <!-- 日期组件的日期展示 -->
            <div class="dateTable clearfix">
                <div class="dateHead clearfix">
                    <span @click="getPreYear"> << </span>
                    <span @click="getPreMonth"> < </span>
                    <span class="curDateText">2020/06</span>
                    <span @click="getNextMonth"> > </span>
                    <span @click="getNextYear"> >> </span>
                </div>
                <div class="dateBody clearfix">
                    <table>
                        <tbody>
                            <tr>
                                <th v-for="(item,idx) in weeks" :key="idx"></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["label","labelWidth"],
    data(){
        return {
            weeks:[ "-" , "二" , "三" , "四" , "五" , "六" , "日" ],
            value:"",
            curDateText:'',

            curDayOfWeek:new Date().getDay(),//当前是星期几
            curDay:new Date().getDate(),//当前是几号,
            curMonth:new Date().getMonth() + 1,//当前是几月
            curYear:new Date().getFullYear(),//当前是多少几年
        }
    },
    computed:{
        labelWidthTag(){
            if(this.labelWidth !== "" && this.labelWidth !== null && this.labelWidth!==undefined){
                return this.labelWidth + "px";
            }else{
                return "100px"
            }
        },
        curDateNum(){
            
        }
    },
    methods:{
        getPreMonth(){},
        getPreYear(){},
        getNextMonth(){},
        getNextYear(){},
    },
    mounted(){

    }
}
</script>

<style>
.clearfix:before,.clearfix:after{content: " ";display: inline-block;height: 0;clear: both;visibility: hidden}
.clearfix{zoom: 1;}
.date{
    width: 500px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    display: inline-block;
}
.label{
    display: block;
    float: left;
    text-align: right;
    height: 36px;
    line-height: 36px;
}
.dateContent{
    border: 1px solid #333;
    position: relative;
    padding: 0 24px 0 24px;
    border-radius: 3px;
    color: #333;
}
.dateContent input{
    width: 100%;
    height: 36px;
    line-height: 36px;
    border: none;
    text-align: center;
}
.dateContent i{
    position: absolute;
    color: #333;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.dateContent .fa-calendar{
    top: 50%;
    transform: translate(-18px,-50%);
}
.dateContent .icon-del{
    top: 50%;
    transform: translate(5px,-50%);
}
.date .dateTable .dateHead span{
    margin: 0 20px;
    float: left;
}
.date .dateTable .dateHead span.curDateText{
    width: 40%;
    text-align: center;
}
.date .dateTable{
    background-color: #ffeaee;
}
.date .dateBody{
    border:1px solid #333;
    border-radius: 3px;
}
</style>