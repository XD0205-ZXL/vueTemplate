<template>
    <div style="height:100%">
        <p class="pageName">使用组件的集合</p>
        <div class="templateBox">
            <div class="template-item">
                <h3 class="templateName">按钮组件的使用:</h3>
                <zButton value="新建" type="create" @click="showCreate"></zButton>
                <zButton value="修改" type="edit" @click="showEdit"></zButton>
                <zButton value="默认按钮"></zButton>
            </div>
            <div class="template-item">
                <h3 class="templateName">input组件的使用:</h3>
                <zInput label="剧名:" @click="clickVal" @blur="alertVal" labelWidth="120" v-model="defaultName" placeholder="请输入剧名"></zInput>
                <p>{{"使用v-model后的值:" + defaultName}}</p>
            </div>
            <div class="template-item">
                <h3 class="templateName">radio组件的使用:</h3>
                <zRadio ref="sexradio" display-value="code" v-model="sexCode" label="性别" :data-source="sex"></zRadio>
                <!-- <z-button @click="changeRadioData"></z-button> -->
            </div>
            <div class="template-item">
                <h3 class="templateName">checkBox组件的使用:</h3>
                <zCheckbox display-name="name" display-value="code" :data-source="checkArr" v-model="hoddys" label="爱好啊:"></zCheckbox>
            </div>
            <div class="template-item">
                <h3 class="templateName">Select组件的使用:</h3>
                <zSelect @input="getNewDataSource" display-name="name" display-value="code" v-model="selectVal" :data-source="selectArr"></zSelect>
            </div>
            <div class="template-item">
                <h3 class="templateName">searchSelect组件的使用:</h3>
                <zSearchSelect display-name="name" display-value="code" v-model="searchSelectVal" :opration="searchSelectOprs"></zSearchSelect>
            </div>
        </div>
    </div>
</template>

<script>
import zInput from "./input.vue";
import zButton from "./button.vue";
import zRadio from "./radio.vue";
import zCheckbox from "./checkBox.vue";
import zSelect from "./select.vue";
import zSearchSelect  from "./searchSelect.vue";
export default {
    components:{zInput,zButton,zRadio,zCheckbox,zSelect,zSearchSelect},
    data(){
        return {
            defaultName:'陈情令:',
            sex:[
                {name:'男',code:21},
                {name:'女',code:11}
            ],
            sexCode:'',
            hoddys:'1',
            checkArr:[
                {name:'看书',code:'1'},
                {name:'打篮球',code:'2'},
                {name:'学习',code:'3'},
                {name:'做饭',code:'4'},
                {name:'打扫家',code:'5'},
            ],
            selectArr:[
                {name:'战战',code:'1'},
                {name:'小飞侠',code:'2'},
                {name:'小腰精',code:'3'},
            ],
            selectVal:'1,2',
            //解析下拉搜索 的数据
            searchSelectVal:'',
            searchSelectOprs:{
                analysis(val){
                    console.log('.......')
                    console.log(val)
                    console.log('.......')
                }
            }
        }
    },
    methods:{
        alertVal(val){
            // alert("blur事件 -- > 当前输入得值是 :  "+val)
        },
        clickVal(val){
            alert("click事件 -- > 当前输入得值是 :  "+val)
        },
        //新建按钮的click事件
        showCreate(){
            console.log("点击了新建按钮")
        },
        showEdit(){
            alert("点击了修改按钮")
        },
        changeRadioData(){
            this.sex = [
                {name:'蓝忘机',code:0},
                {name:'魏无羡',code:1}
            ]
        },
        changeInput(val){
            // this.sexCode = val;
        },
        //ajax改变select的数据源
        getNewDataSource(val){
            let searchKey = val;//搜索的关键字
            let that = this;
            setTimeout(function(){
                    let newdataSource = [
                    {name:'战战de小酒窝啊',code:'1'},
                    {name:'小兔牙',code:'2'},
                    {name:'人间星河',code:'3'},
                ];
                that.selectArr = newdataSource;
            },1000)
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
    min-height: 100px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    /* box-shadow: 0px 0px 12px pink; */
    border-bottom: 1px solid pink;
}
</style>