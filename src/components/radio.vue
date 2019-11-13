<template>
    <div>
        <!-- 
            1. 有 labelWidth 
            2. 有 v-model 是用value来实现
            3. 有 DataSource
            4. 有 选择功能

         -->
        <label class="labelName" :style="{width:labelWidth + 'px'}">{{label}}:</label>
        <div style="float:left" v-if="dataSource && dataSource.length > 0">
            <span class="radioItem" v-for="(item,idx) in dataSource" :key="idx">
                <span class="fa fa-circle-o"></span>
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:["label","dataSource","value"],
    data(){
        return {
            data:[]
        }
    },
    computed:{
        labelWidth(){
            if(this.$attrs.labelWidth){
                return this.$attrs.labelWidth
            }else{
                return 100
            }
        },
    },
    watch:{
        dataSource(val){
            console.log(val)
            if(val && val.length > 0){
                this.data = val
            }
        }
    },
    mounted(){
        console.log(this.value)
    }
}
</script>

<style scoped>
.labelName{
    width: 100px;
    float: left;
    color: red;
    text-align: right;
    border: 1px solid #ccc;
}

.radioItem{
    cursor: pointer;
}

</style>