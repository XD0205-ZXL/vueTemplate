<template>
    <div>
        <p style="labelTitl" :style="{'width':labelWidthTag}">{{label}}</p>
    </div>
</template>

<script>

export default {
    props:['label','labelWidth'],
    data(){
        return {

        }
    },
    computed:{
        labelWidthTag(){
            if(this.labelWidth !== undefined && this.labelWidth !== null){
                return this.labelWidth;
            }else{
                return '100px'
            }
        }
    }
}
</script>

<style scoped>
.labelTitl{
    font-size: 14px;
    color: #000;
}
</style>