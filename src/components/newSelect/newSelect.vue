<template>
   <div class="zSelect">
       <!-- 
            1.有标签, 可设置标签的宽度,是否必填
            v-model，只读状态, 是否支持输入搜索
            2.单选和多选
            3.支持ajax搜索和前端搜索筛选
            4.如果用ajax搜索过后，我选择了一个数据，然后在清除了数据以后，
              需要重新请求完整的下拉option数据
        -->

        <!-- 头部 -->
        <selectInput readonly enableInput></selectInput>

        <div class="">

        </div>
   </div>
</template>

<script>
import selectInput from "./selectInput.vue";
export default {
    components:{selectInput},
    data(){
        return{

        }
    },
    
}
</script>

<style scoped>
.zSelect{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border: 1px solid red;
}
</style>
