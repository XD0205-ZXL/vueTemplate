<template>
    <div>
        <h3>table的使用及学习</h3>
        <tmdButtom type="review" value="获取table选中的数据" @click="getAllSelectData"></tmdButtom>
        <div class='le_table_container'>
            <!-- <table-list title="编辑列表" ref='editList' :options='list_table_options'></table-list> -->
        </div>

        <div class='le_table_container'>
            <table-list title="第二个编辑列表" ref='editList2' :options='list_table_options2'></table-list>
        </div>
    </div>
</template>

<script>
import tmdButtom from "./button.vue";
import tableList from "./table.vue";
export default {
    components:{tableList,tmdButtom},
    data(){
        return {
            list_table_options:{
                showCk:true,
                singleSelected:false,
                map:[
                    {key:"code",val:"编码"},
                    {key:"title",val:"名称"},
                    {key:'childType',val:'新闻类型',convert:this.formateNewsType},   
                    {key:"code",val:"状态",convert:this.formateStatus},
                    {key:"createBy",val:"创建人"},
                    {key:"createTimeStr",val:"创建时间",type:"dateTime"},
                ],
                getUrl:() => {
                    return "/newsbk/brand/editlist?title=&status=&codeLike=&childType=&type=61&ran=0.7539081243686234"
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
            list_table_options2:{
                showCk:true,
                singleSelected:false,
                map:[
                    {key:"type",val:"类型"},
                    {key:"name",val:"名称"}, 
                    {key:"createBy",val:"创建人"},
                    {key:"createTimeStr",val:"创建时间2"},
                ],
                getUrl:() => {
                    return "/site/resource/manage/queryNodeChildren?id=13537111-0c09-4693-b1fc-a274e0de00f3&name=&ran=0.929492929793825"
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
        }
    },
    methods:{
        edit:function(item){
            console.log('这个是编辑操作')
        },
        removeItem:function(item){
            console.log('这个是删除操作')
        },
        info:function(item){
            console.log('这个是查看信息')
        },
        review:function(item){
            console.log('这个是浏览操作')
        },
        getAllSelectData:function(){
            let items = this.$refs.editList.getCheckedItems();
            console.log(items)
        }
    }
}
</script>

<style scoped>

</style>