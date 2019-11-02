<template>
    <!-- 
        input 组件：
            // 1. 是有label   
            // 2. 可以设置labelwidth 
            3. 可以 用 v-model
            4. 可以触发change，input 等事件
            5.应该有setVal 和 getVal这俩个方法
     -->
    <div style="position:relative;width:auto">
        <span class="asLabel" v-show="label" :style="{width:zlabelWidth}">{{label}}</span>
        <input class="z-input" :class="{'readonlyIcon':readonlyFlag}" :readonly="readonlyFlag" @keyup.enter="enterEvent($event)" ref="zinput" type="text" :value="inputValue" :placeholder="placeholderText" v-on:input="throwValue($event)"/>
        <span class="clearIcon" @click="clearValue" v-show="showClear"> X </span>
    </div>
</template>

<script>
import $emitVue from './$emit.vue';
export default {
    props:["label","labelWidth","value"],
    data(){
        return{
            inputValue:this.value,
            isReadonly:'isReadonlyed'
        }
    },
    watch:{
        //不明白为啥还要在这里用watch来观察这个value值，不是有了￥emit了么？
        value(val){ 
            this.setVal(val);
        }
    },
    computed:{
        readonlyFlag(){
            if(this.$attrs.readonly == undefined){
                return false;
            }else if(this.$attrs.readonly == ""){
                return true
            }else if(this.$attrs.readonlyFlag === false){
                return false
            }else{
                return true;
            }
        },
        zlabelWidth(){
            if(this.labelWidth && this.labelWidth > 0 ){
                return this.labelWidth + "px";
            }else{
                return "120px";
            }
        },
        //是否显示清楚按钮
        showClear(){
            if(this.readonlyFlag){
                return false;
            }else{
                if(this.inputValue.length > 0){
                    return true
                }else{
                    return false
                }
            }
        },
        placeholderText(){
            if(this.$attrs.placeholder && this.$attrs.placeholder.length > 0){
                return this.$attrs.placeholder
            }else{
                return "请输入input内容"
            }
        }

    },
    methods:{
        setVal(val){
            this.currentValue = val;
        },
        getVal(){
            return this.currentValue;
        },
        //清空数据
        clearValue(){
            this.inputValue = "";//如果这样设置的话只是把input里面的值变空，但是在获取这个组件的值的时候没有变，还是有值的
            // this.$emit("change","")  //这么写change事件也是不管用的
            this.$emit("input","")
        },
        returnChangeval(event){
            // this.$emit("change",event.target.value)
        },
        throwValue(event){
            this.inputValue = event.target.value;
            this.$emit("input",event.target.value);
            this.$emit("change",event.target.value);
        },

        //删除input中的内容
        enterEvent(e){
            this.$emit("enter",e.target.value);
        }

    },
    mounted(){

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
    /* position: relative;  */
    /* 加上position：relative后，当在后面的这个clearIcon类里面设置了margin-left：-39px的时候，
    clearIcon 这个小圆圈ICon会被这个input遮住，只要去掉input的relative属性就不会遮住了 */
}
.clearIcon{
    display: none;
    width: 20px;
    height: 20px;
    line-height: 26px;
    display: inline-block;
    border-radius: 50%;
    color: #000;
    font-size: 14px;
    /* margin-top: 8px; */
    margin-left: -31px;
    text-align: center;
    font-weight:600;
    cursor: pointer;
    vertical-align: text-bottom;
}

.readonlyIcon{
    background-color: #ccc;
}

</style>