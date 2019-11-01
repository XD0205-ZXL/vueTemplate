<template>
    <!-- 
        input 组件：
            // 1. 是有label   
            // 2. 可以设置labelwidth 
            3. 可以 用 v-model
            4. 可以触发change，input 等事件
            5.应该有setVal 和 getVal这俩个方法
     -->
    <div>
        <span class="asLabel" v-show="label" :style="{width:zlabelWidth}">{{label}}</span>
        <input ref="zinput" type="text" :value="value" @input="throwValue($event)" @change="returnChangeval"/>
    </div>
</template>

<script>
import $emitVue from './$emit.vue';
export default {
    props:["label","labelWidth","value"],
    data(){
        return{

        }
    },
    methods:{
        setVal(val){
            this.value = val;
        },
        getVal(){
            return this.$refs.zinput.value;
        },
        returnChangeval(event){
            this.$emit("change",event.target.value)
        },
        throwValue(event){
            this.$emit("input",event.target.value)
        }

    },
    computed:{
        zlabelWidth(){
            if(this.labelWidth && this.labelWidth > 0 ){
                return this.labelWidth + "px";
            }else{
                return "120px";
            }
        }
    }
}
</script>

<style scoped>
.asLabel{
    display: inline-block;
    text-align: right;
    font-size: 16px;
}

input{
    width: 200px;
    height: 26px;
    line-height: 26px;
    border-radius: 3px;
    border: none;
    border: 1px solid #ccc;
    padding: 0 10px;
}

</style>