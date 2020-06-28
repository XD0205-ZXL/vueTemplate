<template>
    <thead>
        <tr>
            <th v-if="showCk">
                {{ck}}
                <input v-if="!singleSelected" type="checkbox" :checked="ck" v-show="showCk" @click="selectAll"/>
            </th>

            <th class="opration" v-if="actions && actions.length > 0">
                操作
            </th>

            <th v-for="(item,idx) in cols" :key="idx"> 
                {{item.val}}
            </th>

        </tr>
    </thead>
</template>

<script>
// import CommonUtil from '@util';
import CommonUtil from "../../../core/tool.js"

export default {
    props:['showCk','singleSelected','originCols','cols','actions','ck'],
    data(){
        return {

        }
    },
    watch:{
        ck:function(val){
            console.log(val)
        }
    },
    computed:{
        defaultOriginCols(){
            return CommonUtil.object.addPrimaryAndCk(CommonUtil.object.cloneObj(this.originCols),true);
        }
    },
    methods:{
        selectAll:function(){
            //判断当前是否是选中状态，是的话就把body中的数据全部改成 未选中状态
            this.$emit("clickHeadCheckbox",{ck:!this.ck})
        }
    },
    mounted(){
        console.log(this.ck)
    }

}
</script>

<style scoped>
thead th{
    border: 1px solid #ccc8c8;
    text-align: center;
    line-height: 36px;
    background-color: #eaeaea;
    font-weight: 600;
    padding: 10px;
}
</style>

