<template>
    <div>
        <!-- 
            1. 有 labelWidth 
            2. 有 v-model 是用value来实现
            3. 有 DataSource
            4. 有 多选功能  fa-check-square选中的iCon
         -->
        <label class="checkboxTitle" :style="{width:labelWidthVal + 'px'}">{{label}}</label>
        <span @click="changeSelect(item)" class="checkItem" v-for="(item,idx) in dataSource" :key="idx">
            <span>{{item[displayName]}}</span>
            <span class="checkIcon fa" :class="item.ck ? 'fa-check-square':'fa-square-o'"></span>
        </span>
    </div>
</template>

<script>
export default {
    props:["value","label","checkArr","dataSource","displayName","displayValue"],
    data(){
        return {
            valueArr:[],
        }
    },
    computed:{
        labelWidthVal(){
            if(this.$attrs.labelWidth && this.$attrs.labelWidth !== 0){
                return this.$attrs.labelWidth
            }else{
                return 100
            }
        }
    },
    watch:{
        value(newVal){
            // this.initDatasource();
            this.setValue(newVal);
        },
        dataSource(newVal){
            if(newVal && newVal.length > 0){

            } 
        }
    },
    methods:{
        changeSelect(item){
            item.ck = !item.ck;
            let res = this.getSelectitem().join(",");
            this.$emit('input',res);
        },
        getSelectitem(){
            let vals = [];
            this.dataSource.forEach(item=>{
                if(item.ck ==  true){
                    vals.push(item[this.displayValue]);
                }
            });
            return vals;
        },
        setValue(val){
            let that = this;
            if(val != undefined && val != null && val.length >  0 ){
                val = val.split(",");
                val.forEach(ele=>{
                    that.dataSource.forEach(item=>{
                        if(item[that.displayValue].toString() == ele){
                            item.ck = true;
                        }
                    })
                })
            }else{
                this.dataSource.forEach(item=>{
                    item.ck = ""
                })
            }
        },
        initDatasource(){
            //循环数组 ，给他们加上class类名
            if(this.dataSource && this.dataSource.length > 0){
                this.dataSource.forEach(item => {
                    item.ck = false;
                });
            }
        }
    },
    mounted(){
        this.initDatasource();
        this.setValue(this.value)
    }
}
</script>

<style scoped>
.checkboxTitle{
    display: inline-block;
    text-align: right;
}

.checkItem{
    cursor: pointer;
}

</style>