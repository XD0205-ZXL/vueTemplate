<template>
    <div>
        <h3>table的使用及学习</h3>
        <div class='le_table_container'>
            <table-list title="编辑列表" ref='resourceManage_list_ref' :options='list_table_options'></table-list>
        </div>
    </div>
</template>

<script>
import tableList from "./table.vue";
export default {
    components:{tableList},
    data(){
        return {
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
            }
        }
    }
}
</script>

<style scoped>

</style>