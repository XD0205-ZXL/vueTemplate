<template>
        <!-- 
            1.有标签, 可设置标签的宽度,是否必填
            v-model，只读状态, 是否支持输入搜索
            2.单选和多选
            3.支持ajax搜索和前端搜索筛选
            4.如果用ajax搜索过后，我选择了一个数据，然后在清除了数据以后，
              需要重新请求完整的下拉option数据
        -->
    <div>
        <h2>这个是新的使用页面</h2>
        最后选择的值为：{{val}}
        <zSelects multiple displayName="name" v-model="val" displayValue="name" :dataSource="getAjaxData" labelWidth="100" labelName="测试名称:" msg="必填" tip="请输入正整数" readonly="false" enableInput></zSelects>
    </div>
</template>
<script>
import zSelects from './selectInput'
export default {
    components:{zSelects},
    data(){
        return {
            val:'韩烁,心爱',
            getAjaxData:[
                {name:'陈芊芊',msg:'你太虎了 。。。',code:'1'},
                {name:'韩烁',msg:'我刚刚打的虎吗？',code:'2'},
                {name:'心爱',msg:'伤她心我是万万不能',code:'3'},
                {name:'初澈',msg:'花易落',code:'4'},
                {name:'测试实测',msg:'测试实测 。。。',code:'5'},
                {name:'不悔',msg:'我是杨不悔',code:'6'},
                {name:'小昭',msg:'我是小昭',code:'7'},
                {name:'易落',msg:'月难圆',code:'8 '},
            ]
        }
    },
}
</script>

<style scoped>

</style>