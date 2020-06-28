<template>
    <div class="table">
        <div class="tableTitle" v-show="title">{{title}}</div>
        <div class="tableContent">
            <table>
                <tmdHead @clickHeadCheckbox="optHeadCheckbox" :showCk="showCk" :singleSelected="singleSelected" :originCols="originCols" :cols="state.cols" :actions="actions" :ck="state.ck"></tmdHead>
                <tmdBody ref="tmdBody" @clickBodyCheckbox="optBodyCheckbox" :showCk="showCk" :singleSelected="singleSelected" :actions="actions" :ck="state.ck" :data="state.data" :cols="state.cols"></tmdBody>
            </table>
            <tmdPaging @getPreDatas="getPreData" @getNextDatas="getNextData" @getAppointDatas="getAppointData" :curPage="state.pageOption.index" :count="state.pageOption.count" :totle="state.pageOption.total"></tmdPaging>
        </div>
    </div>
</template>

<script>
import CommonUtil from "../../../core/leCompsTool.js";
// import CommonUtil from '@util';

import tmdHead from "./head.vue";
import tmdBody from "./body.vue";
import tmdPaging from "./paging.vue";
export default {
    props:['title','options'],
    components:{tmdHead,tmdBody,tmdPaging},
    data(){
        return {
            state:{
                data:[],
                ck:true,//是否选中多选框
                cols:this.options.map,
                pageOption:{
                    index:this.options.pageOption.index?this.options.pageOption.index:1,
                    size:this.options.pageOption.size?this.options.pageOption.size:10,
                    count:0,
                    total:0
                }
            },
            //isLoading == true的话代表当前正在请求数据，否则，数据请求完毕
            isLoading:false,
        }
    },
    computed:{
        showCk(){
            return this.options.showCk;
        },
        singleSelected(){
            return this.options.singleSelected;
        },
        actions(){
            return this.options.actions;
        },
        getUrl(){
            return this.options.url;
        },
        originCols(){
            return CommonUtil.object.cloneObj(this.options.map);
        }
    },
    methods:{
        //点击了thead的 多选框，需要把数据的ck属性改变
        //子级的数据是父级用prop传递下去的 子级要想自己当前的数据改变的话 就通知父级 让父级的数据改变
        //然后在父级重新的把数据传递给子级，从而完成子级数据的变化
        optHeadCheckbox(val){
            this.state.ck = val.ck;
            //val为true的话 就选中所有的数据
            if(this.state.ck){
                this.state.data.forEach(item => {
                    item.ck = true;
                });
            }else{
                this.state.data.forEach(item => {
                    item.ck = false;
                });
            }
        },
        // optBodyCheckbox(bodyData){
        //     let selectItems = this.$refs.tmdBody.getCheckedItems();
        //     let ckFlg = selectItems.length === this.state.data.length ? true :false;
        //     this.state = {
        //         data : bodyData,
        //         ck:ckFlg,
        //         cols:this.options.map,
        //         pageOption:this.state.pageOption
        //     }
        // }, 
        optBodyCheckbox(bodyCurclickItem){
            this.state.data.forEach(item => {
                if(bodyCurclickItem.__tmpId == item.__tmpId){
                    item.ck = !bodyCurclickItem.ck;
                }
            });
            let selectItems = this.getCheckedItems();
            let ckFlg = selectItems.length === this.state.data.length ? true :false;
            this.state = {
                data : this.state.data,
                ck:ckFlg,
                cols:this.options.map,
                pageOption:this.state.pageOption
            }
        },  
        //获取数据源
        getData(pageIndex){
            if(this.isLoading){
                return
            };
            this.isLoading = true;//正在发送请求
            if(!pageIndex){
                pageIndex = 1; //默认加载第一页的数据
            };
            let url = this.options.getUrl();
            let size = this.state.pageOption.size;
            if(this.url === ""){
                console.log("<#无有效的url#>!");
                return;
            };
            //如果有url的话 就拼接参数
            let character =  url.indexOf('?') === -1?"?":"&";
            url = url + character + this.options.pageOption.indexKey + '=' + pageIndex + "&" +
                this.options.pageOption.sizeKey + '=' + this.state.pageOption.size;
                this.ajax.getFetch(url).then(data=>{
                this.isLoading = false;
                let res = {};
                //把请求到的数据,解析后,获取到核心数组
                if(this.options.analysis){
                    res = this.options.analysis(data);
                }else{
                    res = data;
                };
                //把数组继续解析，然后计算出 总条数，页数，
                if(res.data && res.data instanceof Array && res.data.length >0){
                    let arr = CommonUtil.object.addPrimaryAndCk(res.data);
                    // let total = -1;
                    let total = 0;
                    debugger
                    if(parseInt(data.data.count)%size == 0){
                        total = parseInt(data.data.count)/size;
                    }else{
                        total = parseInt(data.data.count/size + 1);
                    };
                    
                    this.state = {
                        data : arr,
                        cols:this.state.cols,
                        ck:false,
                        pageOption:{
                            index:pageIndex,
                            count:res.count,
                            total:total,
                            size:size
                        }
                    };
                    console.log(this.state)
                }else{
                    this.noResultCb();
                    console.log("<#数据源为空或者检查analysis, getUrl, pageOption参数!#>");
                };
            }).catch(error=>{
                // alert(error.data);
                this.noResultCb();
            })
        },
        //获取到的数据为空
        noResultCb(){
            let size = this.state.pageOption.size;
            this.isLoading = false;
            this.state = {
                data:[],
                cols:this.state.cols,
                ck:false,
                pageOption:{
                    index:1,
                    count:0,
                    total:0,
                    size:size
                }
            }
        },
        search(index){
            if(index){
                this.getData(index)
            }else{
                this.getData(this.state.pageOption.index)
            }
        },
        getParams(){
            return {
                index:this.state.pageOption.index,
                data:this.state.data
            }
        },
        searchCurrentIndex(){
            this.search(this.getParams.index);
        },
        //获取指定页数的数据
        getAppointData(val){
            this.state.pageOption.index = val;
            this.search();
        },
        //上一页
        getPreData(){
            this.state.pageOption.index --;
            this.search();
        },
        //下一页
        getNextData(){
            this.state.pageOption.index ++;
            this.search();
        },
        //获取body中选中的数据
        getCheckedItems(){
            let items = [];
             this.state.data.forEach(item => {
                if(item.ck){
                    items.push(item)
                };
            });
            return items;
        }
    },
    mounted(){
        this.getData(this.state.pageOption.index);
    }
}
</script>

<style scoped>
.tableTitle{
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background-color: #504646;
}
.tableContent{
    width: 100%;
    min-height: 300px;
    border:1px solid #ccc;
}
table{
    width: 100%;
    min-height: 300px;
    border:1px solid red;
    border-collapse: collapse;
}
</style>