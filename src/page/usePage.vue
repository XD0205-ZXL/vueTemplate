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
            <!-- <div class="template-item">
                <h3 class="templateName">Select组件的使用:</h3>
                <zSelect @input="getNewDataSource" display-name="name" display-value="code" v-model="selectVal" :data-source="selectArr"></zSelect>
            </div> -->
            <div class="template-item">
                <h3 class="templateName">searchSelect组件的使用222:</h3>
                <!-- <zSearchSelect display-name="name" display-value="code" v-model="searchSelectVal" :opration="searchSelectOprs"></zSearchSelect> -->
                <p>选择的值是：{{selectval}}</p>
                <Zselects multiple displayName="name" v-model="selectval" displayValue="name" :dataSource="getAjaxData" labelWidth="100" labelName="测试名称:" msg="必填" tip="请输入正整数" readonly="false" enableInput></Zselects>
            </div>

            <div class="template-item">
                <h3 class="templateName">table组件的使用:</h3>
                <ZTableList title="编辑列表" ref='resourceManage_list_ref' :options='list_table_options'></ZTableList>
            </div>

            <div class="template-item">
                <h3 class="templateName">Date组件的使用:</h3>
                <Zdate label="创建日期:" labelWidth="120"></Zdate>
            </div>

            <div class="template-item">
                <h3 class="templateName">upload组件的使用:</h3>
                <ZUpload label="图片上传:" labelWidth="120" uploadOptions="uploadOptions"></ZUpload>
            </div>
            
        </div>
    </div>
</template>

<script>
// import zInput from "../components/input.vue";
// import zButton from "../components/button.vue";
// import zRadio from "../components/radio.vue";
// import zCheckbox from "../components/checkBox.vue";
// import zSelect from "../components/select.vue";
// import zSearchSelect  from "../components/searchSelect.vue";
export default {
    // components:{zInput,zButton,zRadio,zCheckbox,zSelect,zSearchSelect},
    data(){
        return {
            defaultName:'陈情:',
            sex:[
                {name:'男',code:21},
                {name:'女',code:11}
            ],
            sexCode:'21',
            hoddys:'505',
            checkArr:[
                {name:'看书',code:'101'},
                {name:'打篮球',code:'202'},
                {name:'学习',code:'303'},
                {name:'做饭',code:'4404'},
                {name:'打扫家',code:'505'},
            ],
            selectArr:[
                {name:'战战',code:'1'},
                {name:'小飞侠',code:'2'},
            ],
            selectVal:'1,2',
            //解析下拉搜索 的数据
            searchSelectVal:'',
            searchSelectOprs:{
                analysis(val){
                    console.log(val)
                }
            },

            listTitle:'订单列表',
            orderListOpt:{
                showCk:true,
                singleSelected:true,
                actions:[
                    {val:'<#修改模板#>',key:'update',action:this.updateTemplate},
                    {val:'<#删除#>',key:'remove',action:this.deleteItem},
                    {val:'<#详情#>',key:'info',action:this.info},
                    {val:'<#预览#>',key:'review',action:this.previewPage}
                ],
                map:[
                    {key:"code",val:"<#模板编码#>"},
                    {key:"indexData.modelName",val:"<#模板名称#>"},
                    // {key:"indexData.modelType",val:"<#模板类型#>"},
                    // {key:"indexData.updateTime",val:"<#模板内容#>"},
                    {key:"indexData.updateTime",val:"<#更新时间#>",convert:this.formateTimestamp},
                    {key:"indexData.updateTime",val:"<#更新人#>"},
                ],
                getUrl:() => { 
                        return "/mail/query/email/modelList?code=1001&modelName=&modelTypeId="
                },
                pageOption:{
                    sizeKey:"pageSize",
                    indexKey:"pageNum",
                    index:1,
                    size:10
                },
                analysis:(data)=>{
                    if(data && data.data && data.data.data){
                        let datas  = data.data.data;
                        datas.forEach(item => {
                            if( item.indexData && item.indexData !== ""){
                                 item.indexData =JSON.parse( item.indexData)
                            }else{
                                return {}
                            }
                        });
                        return {
                            data:data.data.data,
                            count:data.data.totalNum
                        }
                    }else{
                        return {
                            data:[],
                            count:0
                        }
                    }
                }
            },
            selectval:'小烁,心爱',
            getAjaxData:[
                {name:'芊芊',msg:'你太虎了 。。。',code:'1'},
                {name:'小烁',msg:'我刚刚打的虎吗？',code:'2'},
                {name:'心爱',msg:'我是万万不能',code:'3'},
                {name:'初澈',msg:'花易落',code:'4'},
                {name:'测试实测',msg:'测试实测 。。。',code:'5'},
                {name:'不悔',msg:'我是杨不悔',code:'6'},
                {name:'小昭',msg:'我是小昭',code:'7'},
                {name:'易落',msg:'月难圆',code:'8 '},
            ],
            list_table_options:{
                showCk:true,
                // singleSelected:true,
                map:[
                    {key:"code",val:"<#编码#>"},
                    {key:"title",val:"<#名称#>"},
                    {key:'childType',val:'<#新闻类型#>',convert:this.formateNewsType},   
                    {key:"code",val:"<#状态#>",convert:this.formateStatus},
                    {key:"createBy",val:"<#创建人#>"},
                    {key:"createTimeStr",val:"<#创建时间#>",type:"dateTime"},
                ],
                getUrl:() => {
                    return "https://admin.nec.lenovouat.com/newsbk/brand/editlist?title=&status=&codeLike=&childType=&type=61&curPage=1&pageSize=10&ran=0.7539081243686234"
                },
                pageOption:{
                    sizeKey:"pageSize",
                    indexKey:"curPage",
                    index:1,
                    size:10
                },
                actions:[
                    {
                        key:"update",
                        val:"<#编辑#>",
                        action:this.edit
                    },
                    {
                        key:"remove",
                        val:"<#删除#>",
                        action:this.removeItem
                    },
                    {
                        key:"info",
                        val:"<#详情#>",
                        action:this.info
                    },
                    {
                        key:"review",
                        val:"<#预览#>",
                        action:this.review
                    }
                ],
                analysis:(data)=>{
                    if(data && data.data && data.data.dataList){
                        return {
                            data:data.data.dataList,
                            count:data.data.count
                        }
                    }else{
                        return {
                            data:[],
                            count:0
                        }
                    }
                }
            },
            uploadOptions:{
                type:'png,jpg',
                size:500,
                analysis:function(data){
                    console.log(data)
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