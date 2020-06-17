<template>
    <div class="content">
        <!-- input框 -->
        <div class="selectTop">
            <ul class="selectItemContent" v-if="selectArr">
                <li class="selectItem" v-for="(item,idx) in selectArr" :key="idx">{{item[displayName]}}</li>
            </ul>
            <input type="input" class="keyWord" @keyup="changeDataSource($event)"/>
        </div>
        <!-- 下拉框 -->
        <ul class="opations" v-if="dataSource">
            <li @click="selectItem(item)" class="selectOpation" v-for="(item,idx) in dataSource" :key="idx">{{item[displayName]}}</li>
        </ul>
    </div>
</template>

<script>
import $ from "jquery"
export default {
    props:["value","dataSource","displayName","displayValue"],
    data(){
        return {
            selectArr:[],
            data:[]
        }
    },
    watch:{
        value(val){
            if(val != undefined && val != null && val != ""){
                // this.setValue(val);
            }
        },
        dataSource(val){
            debugger
            if(val && val.legnth > 0){
                return val
            }
        }
    },
    methods:{
        setValue(val){
            let res = val.split(",");
            res.forEach(item => {
                 this.dataSource.forEach(obj=>{
                    if(obj[this.displayValue] == item){
                        obj.ck = true;
                    }
                 })
            });
        },
        changeDataSource(event){
            let val = event.target.value;
            if(val != "" && val != undefined && val != null){
                this.$emit("input",val);
                $(".opations").slideDown();
            }else{
                this.$emit("input",val);
                $(".opations").slideUp();
            }
        },
        resetDataSource(){
            if(this.dataSource && this.dataSource.legnth >0){
                this.dataSource.forEach(item=>{
                    item.ck = false;
                })
            };
        },
        checkExist(id){
            let that = this;
            let exist = true;
            that.selectArr.forEach(item=>{
                if(item[that.displayValue] == id){
                    exist = false
                }
            });
            return exist; //true：不存在可以push 反之已存在
        },
        selectItem(item){
            // if(!item.ck){
                //先检查是否已经存在了
            let res = this.checkExist(item[this.displayValue]);
            if(res){
                this.selectArr.push(item);
            }else{
                alert("当前数据已经存在了")
            }   
            // }
            // item.ck = !item.ck;
        },
       
    },
    mounted(){
        
        if(this.dataSource && this.dataSource.legnth > 0){
            resetDataSource();
        }

        if(this.value && this.value.length > 0){
            this.setValue(this.value)
        }
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.content{
    width: 400px;
    height: 400px;
    border: 1px solid red;
}

.selectTop{
    width: 100%;
    /* min-height:100px;
    border: 1px solid green;  */
}

.keyWord{
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    color: #212020;
}

.selectBottom{
    width: 100%;
    min-height:100px;
    border: 1px solid deeppink;
    margin-top: 10px;
    border-radius: 10px; 
}

.selectItemContent .selectItem{
    float: left;
    background: #ccc;
    padding: 2px 5px;
    border-radius: 5px;
    margin: 3px;
    cursor: pointer;
}

.opations{
    width: 100%;
    border: 1px solid deeppink;
    margin-top:20px;
    border-radius: 5px; 
}

.opations .selectOpation{
    width: 100%;
    border-bottom: 1px solid #ccc;
    height: 36px;
    padding: 0 10px;
    line-height: 36px;
}

.opations .selectOpation:hover{
    background-color: #efeded;
}


</style>