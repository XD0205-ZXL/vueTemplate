<template>
    <div class="searchSelect">
        <input type="text" @keyup="reloadList($event)" class="searchInput" v-model="searchKey"/>
        <ul v-if="dataSource.length > 0">
            <li v-for="(item,idx) in dataSource" :key="idx">{{item[displayName]}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["opration","url","displayName","displayValue","value","readonly"],
    data(){
        return {
            dataSource:[
                {name:'魔道祖师',code:0}
            ],//原数据
            ajaxUrl:'', //数据地址
            searchKey:'',//搜索的关键字
            curSelectVal:'',//当前被传中的值  即v-model的值
            selectItems:[],//被传中的项
            curSelectItem:{},//当前被选中的数据
        }
    },
    watch:{
        url(newVal){
            this.ajaxUrl = newVal;
        },
        value(newVal){
            if(newVal !== null && newVal !==undefined && newVal !== ""){
                this.curSelectVal = newVal.split(",");
            }
        }
    },
    methods:{
        reloadList(event){
            console.log(event.target.value);
        },
        //获取数据
        getSelectDataSource(){
            // this.getSelectList({context:this,parmas:this.searchKey,cb:(d)=>{
            //     console.log(d)
            // }})
            this.dataSource = [
                {name:'战战',code:'1'},
                {name:'耶博',code:'2'},
                {name:'小飞侠',code:'3'},
                {name:'小摩托 ',code:'4s'},
            ]

        }
    },
    mounted(){
        this.getSelectDataSource();
    }
}
</script>

<style scoped>
.searchSelect{
    border: 1px solid red;
}

.searchInput{

}
</style>