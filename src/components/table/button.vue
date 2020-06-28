<template>
<!-- 
    1. 宽度可以自适应
    2. 可以设置按钮上的字
    3. 可以设置type，不同的type显示不同的颜色
    4. 设置icon ，根据传入的type的不同，来显示不同的icon
    5. 有click事假
    6. 
 -->
    <div class="btnContent" @click="clickEvent">
        <i class="fa" :class="_typeConfig.iCls"></i>
        <span class="z_button" :class="_typeConfig.cls">{{btnText}}</span>
    </div>
</template>

<script>
import Enum from "./enum.js";
export default {
    props:["value","type"],
    data(){
        return {
           
        }
    },
    computed:{
        btnText(){
            if(this.value && this.value!=="" && this.value.length > 0){
                return this.value
            }else{
                return "确定"
            }
        },
        _type(){
            let _type="default";
            if(this.type){
                _type = this.type
            }
            return _type
        },
        //根据type来搜索enum中的数据
        _typeConfig(){
            let _typeConfig = {};
            _typeConfig = Enum.buttonConfig[this._type];
            return _typeConfig;
        }
    },
    methods:{
        clickEvent(){
            this.$emit("click");
        }
    }
}
</script>

<style scoped>
.btnContent{
    width: auto;
    display: inline-block;
    position: relative;
}

.btnContent .z_button{
    padding: 5px 10px 5px 20px;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
}

.create{
    background-color: #67c23a;
    border: 1px solid #67c23a;
}

.update{
    background-color: #409eff;
    border: 1px solid #409eff;
}

.remove{
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
}

.warning{
    background-color: #e6a23c;
    border: 1px solid #e6a23c;
}

.default{
    background-color: #909399;
    border: 1px solid #909399;
}

.info{
    background-color: #3bafda;
    border-color: #3bafda;
}

.review{
    background-color: #35bb9c;
    border-color: #35bb9c;
}

.fa{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 12px;
}

</style>