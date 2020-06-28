<template>
    <tbody>
        <template v-if="data.length > 0">
            <tr v-for="(item,idx) in data" :key="idx" @click="selectItem(item)">
                <!-- 多选或单选 -->
                <td v-if="showCk">
                    <div v-if="singleSelected">
                        <input type="radio" :checked="item.ck"/>
                    </div>
                    <div v-else>
                        <input type="checkbox" :checked="item.ck"/>
                    </div>
                </td>

                <!-- 操作按钮列 -->
                <td class="opration" v-if="actions && actions.length > 0">
                    <div class="btnContent" v-for="(btnItem,btnidx) in actions" :key="btnidx">
                        <tmdButtom @click="e=>{btnItem.action(item)}" :type="btnItem.key" :value="btnItem.val"></tmdButtom>
                    </div>
                </td>

                <!-- 显示对应的列表字段 -->
                <td v-for="(obj,index) in cols" :key="index">
                    {{item[obj.key]}}
                </td>
            </tr>
        </template>
        <tr v-else>
            <td colspan="11">暂无数据</td>
        </tr>
    </tbody>
</template>

<script>
import tmdButtom from "./button.vue";
export default {
    components:{tmdButtom},
    props:['actions','data','cols','showCk','singleSelected','originCols'],
    data(){
        return {

        }
    },
    methods:{
        selectItem(item){
            // if(this.singleSelected){
            //     this.data.forEach(item => {
            //         item.ck = false;
            //     });
            // };
            // item.ck = !item.ck;
            // this.$emit("clickBodyCheckbox",this.data)
            this.$emit("clickBodyCheckbox",item)
        },
    },
    mounted(){
    }
}
</script>

<style scoped>
td{
    border: 1px solid #ccc8c8;
    padding: 10px;
    text-align: center;
    font-size: 12px;
}

.opration .btnContent{
    margin: 5px;
    display: inline-block;
}
</style>