<template>
    <div>
        <!-- 
            1. 有 labelWidth 
            2. 有 v-model 是用value来实现
            3. 有 DataSource
            4. 有 选择功能

         -->
        <label class="labelName" :style="{width:labelWidth + 'px'}">{{label}}:</label>
        <div style="float:left" v-if="data && data.length > 0">
            <span :class="readonlyFlag?'readonlyIcon':''" class="radioItem" v-for="(item,idx) in data" :key="idx" @click="changeSelectitem(item)">
                <span class="fa" :class="item.ck ? 'fa-dot-circle-o':'fa-circle-o'"></span>
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:["label","dataSource","value","displayValue","readonly"],
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
        readonlyFlag(){
            if(this.readonly == undefined){
                return false
            }else if(this.readonly === ""){
                return true
            }else if(this.readonly === false){
                return false
            }else {
                return true
            }
        }
    },
    watch:{
        value(val){
            this.setValue(val)
        },
        dataSource(newVal){ 
            if(newVal && newVal.length > 0){
                this.data = newVal
            };
            this.reSetval();
        }
    },
    methods:{
        clearVal(){
            this.reSetval();
            this.$emit("input","")
        },
        setValue(val){ //这个val代表的是v-model的
        let that = this;
        debugger
            val !== null && val !== undefined && val !== "" ? val = val.toString():val = "";
            //当val不为空（v-model了一个值的时候）得判断哪个是被选中的
            //先给DataSource中的每一项加一个标识是否选中的ck属性
            that.reSetval();
            //选中值
            that.data.forEach(item=>{
                if(item[that.displayValue] && item[that.displayValue] == val ){
                    item.ck = true
                }
            })
        },
        getValue(){
            return this.value
        },
        changeSelectitem(item){
            this.clearVal();
            if(this.readonlyFlag){
                return
            }
            debugger
            item.ck = true; 
            this.$emit('input',item[this.displayValue]);
            this.$emit('click',item[this.displayValue]); 
            this.$emit("change",item,this.data);
            console.log(this.data)
        },
        reSetval(){
            if(this.data && this.data.length > 0){
                this.data.forEach(item => {
                    item.ck = false;
                });
            }
        }
    },
    mounted(){
        if(this.dataSource && this.dataSource.length > 0 ){
            this.data = this.dataSource
        };
        if(this.value){
            this.setValue(this.value)
        }
        this.reSetval();
    }
}
</script>

<style scoped>
.labelName{
    width: 100px;
    float: left;
    text-align: right;
}

.radioItem{
    cursor: pointer;
}

.radioItem.readonlyIcon{
    color: #ccc;
}

.faiCon{
    width: 50px;
    height: 50px;
    border: 1px solid red;
    display: inline-block;
}

</style>