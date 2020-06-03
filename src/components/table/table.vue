<template>
    <!-- 
        1. 有table标题
        2. 当table的内容太长的时候可以横着滑动
        3. 可多选 单选
        4. 有操作选项
        5. 有loadin效果
        6. 没有数据的时候提示   暂无数据
    -->
    <div>
        <p v-show="title" class="table-title">{{title}}</p> 
        <div class="tableContainer">
       
            <table>
                <zHead :cols = "colsdata"></zHead>
            </table>
        </div>
    </div>
</template>

<script>
import tool from "../../../core/tool.js";
import zHead from "./zhead.vue";

export default {
    components:{zHead},
    props:["options","title"],
    data(){
        return {
            data:[
                {name:'陆绎',code:'1001',componey:'锦衣卫',position:"老大"},
                {name:'袁今夏',code:'1002',componey:'六扇门',position:"捕快"},
                {name:'张小玲',code:'1003',componey:'联和利泰',position:"前端开发"}
            ],
            colsdata:this.options.map,
            ck:false,
            pageOption:{
                size:this.options.size?this.options.size:10,
                index:this.options.index?this.options.index:1,
                count:0,
                total:0
            }
        }
    },
    computed:{
        showCk(){
            return this.options.showCk
        },
        singleSelected(){
            return this.options.singleSelected
        },
        getUrl(){
            return this.options.getUrl
        },
        actions(){
            return this.options.actions
        },
        originCols:function(){
            return tool.object.cloneObj(this.options.map);
        },
    },
    methods:{
        getData(curPageIdx){
            let url = this.getUrl();
            let size =  this.pageOption.sizeKey;  //条数
            if(!curPageIdx){
                curPageIdx = 1;   //页数
            }
            if( url === ""){
                this.noResultCb();
                console.log("<#无有效的url#>!");
                return;
            }
            //原来已经有参数的话就用 & 吧 页数和条数的参数拼接起来
            if(url.indexOf("?") > 0){
                debugger
                // url = url + "&"+this.options.pageOption.sizeKey + "=" + this.pageOption.size + "&"+this.options.pageOption.indexKey +"="+this.pageOption.index
                url="/tree/category/querytreenode?type=17&parentId=3ec36007-78af-4530-a931-07e4ff228fb5&parentCode=AACQ&searchkeys=&sortParam=Order_ASC,CreateTime_DESC&pageNum=1&pageSize=9999"
            }   
            
            console.log(url)

            // this.ajax.getFetch(url).then(data=>{
                
            // })
        }
    },
    mounted(){
        console.log(this.options);
        this.getData();
    }
}
</script>

<style scoped>
 .table-title{
        text-align: center;
        width: 100%;
        margin: 0 auto;
        border-radius: 3px 3px 0 0;
        height: 38px;
        line-height: 38px;
        background-color: #434e5b;
        font-size: 14px;
        color: #fff;
    }
    
    .tableContainer{
        display: block;
        min-width: 100%;
        position: relative;
    }

    .tableContainer .tableMask{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        background: rgba(0, 0, 0, 0.8);
        display: block;
    }

    .tableContainer .tableBox{
        overflow:scroll; 
    }

    .tableContainer .table-title{
        text-align: center;
        width: 100%;
        margin: 0 auto;
        border-radius: 3px 3px 0 0;
        height: 38px;
        line-height: 38px;
        background-color: #434e5b;
        font-size: 14px;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .table{
        min-width: 100%;
        width: auto;
        border-collapse: collapse;
        font-size: 14px;
        overflow: hidden;
        margin-bottom: 0px;
    }
  
    table thead{
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        color: #fff;
        background-color: #e3e3e3;
    }

    table tbody{
        height: 38px;
        line-height: 38px;
        font-size: 12px;
    }

    .tableMask .tableLoadingImg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

