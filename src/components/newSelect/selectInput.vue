<template>
    <div class="selectInput">
       <input @click="showOption" v-show="enableInputTag" class="searchInput" :class="{'readonlyTag':readonlyTag}"/>
        <i class="asBtn clearBtn fa fa-times-circle"></i>
        <i class="asBtn hasOption fa fa-chevron-down icon-del"></i>
    </div>
</template>

<script>
export default {
    props:['enableInput',"readonly"],
    data(){
        return {

        }
    },
    computed:{
        readonlyTag(){
            if(this.readonly || this.readonly == ""){
                return true
            }else{
                return false
            }
        },
        enableInputTag(){
            if(this.enableInput || this.enableInput == ""){
                return true
            }else{
                return false
            }
        },
    },
    methods:{
        showOption(){
            if(!enableInputTag){

            }else{
                return
            }
        }

    }
}
</script>

<style scoped>
.selectInput *{
    box-sizing: border-box;
}
.selectInput{
    width: 500px;
    min-height: 100px;
    border:1px solid green;
    padding-right: 30px;
    box-sizing: border-box;
    position: relative;
}
.searchInput{
    width: 100%;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 0 10px;
    display: block;    
}
.asBtn{
    width: 16px;
    height: 16px;
    display: block;
    border: 1px solid red;
    cursor: pointer;
}
.clearBtn{
    position: absolute;
    top: 9px;
    right: 0;
    display: none;
}
.hasOption{
    position: absolute;
    top: 9px;
    right: 0;
}
.readonlyTag{
    background-color: #ddd;
}
</style>