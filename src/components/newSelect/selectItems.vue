<template>
    <div class="selectTagsBox">
        <div class="selectTags" v-for="(item,index) in dataSource" :key="index">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    props:['dataSource'],
    data(){
        return {

        }
    },
    watch:{
     
    },
    mounted(){
        console.log(this.dataSource)
    }
}
</script>

<style scoped>
.selectTags{    
    background-color: #ccc;
    border-radius:3px;
    padding: 3px 8px;
    float: left;
    margin: 5px;
}
</style>