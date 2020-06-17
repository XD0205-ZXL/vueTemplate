<template>
    <div class="table">
        <div class="tableTitle" v-show="title">{{title}}</div>
        <div class="tableContent">
            <table>
                <tmdHead @clickHeadCheckbox="optHeadCheckbox" :showCk="showCk" :singleSelected="singleSelected" :originCols="originCols" :cols="state.cols" :actions="actions" :ck="state.ck"></tmdHead>
            </table>
        </div>
    </div>
</template>

<script>
import tool from "../../../core/tool.js";
import tmdHead from "./head.vue";
export default {
    props:['title','options'],
    components:{tmdHead},
    data(){
        return {
            state:{
                data:[],
                ck:false,//是否选中多选框
                cols:this.options.map,
                options:{
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
            return tool.object.cloneObj(this.options.map);
        }
    },
    methods:{
        //点击了thead的 多选框，需要把数据的ck属性改变
        //子级的数据是父级用prop传递下去的 子级要想自己当前的数据改变的话 就通知父级 让父级的数据改变
        //然后在父级重新的把数据传递给子级，从而完成子级数据的变化
        optHeadCheckbox(val){
            this.state.ck = val.ck;
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
            let size = this.state.options.size;
            if(this.url === ""){
                console.log("<#无有效的url#>!");
                return;
            };
            //如果有url的话 就拼接参数
            let character =  url.indexOf('?') === -1?"?":"&";
            url = url + character + this.options.pageOption.indexKey + '=' + pageIndex + "&" +
                this.options.pageOption.sizeKey + '=' + this.state.options.size;
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
                    let arr = tool.object.addPrimaryAndCk(res.data);
                    let total = -1;
                    if(parseInt(data.count)%size == 0){
                        total = parseInt(data.count)/size;
                    }else{
                        parseInt(data.count)/size + 1;
                    };
                    this.state = {
                        data : arr,
                        cols:this.state.cols,
                        ck:false,
                        pageOption:{
                            index:index,
                            count:res.count,
                            total:total,
                            size:size
                        }
                    }
                }else{
                    this.noResultCb();
                    console.log("<#数据源为空或者检查analysis, getUrl, pageOption参数!#>");
                };
            }).catch(error=>{
                // alert(error);
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
                this.getData(this.state.options.index)
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
        }
    },
    mounted(){
        this.getData(this.state.options.index)
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
}
</style>