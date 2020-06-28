<template>
   <div class="options" v-show="showOrHide">
        <!-- 这个是当前组件作为单选或者是多选的时候，用户选择后，选中的选项 -->
        <!-- 且要展示的内容是用户可以配置的 -->
        <ul>
            <li @click.stop="deliveryThisItem(item)" v-for="(item,index) in dataSource" :key="index" class="selectItem" :class="item.cls">{{item[displayName]}}</li>
        </ul>
   </div>
</template>

<script>
export default {
    props:['dataSource','displayName','showOrHide'],
    data(){
        return{
            
        }
    },
    methods:{
        deliveryThisItem(item){
            this.$emit("deliveryItem",item);
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.options{
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 3px;
    z-index: 1;
    position: absolute;
    top: 100%;
    border:1px solid #ddd;
}
.selectItem{
    line-height: 30px;
    font-size: 12px;
    color: #524f4f;
    padding: 0 10px;
        width: 100%;
}
.selectItem:hover{
    background-color: #eae8e8;
    cursor: pointer;
}

</style>
