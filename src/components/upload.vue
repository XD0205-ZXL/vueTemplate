<template>
    <!-- 
        1.上传文件的 url
        2.检测上传文件的类型 ，大小 ， 
        3.解析函数，如果是上传图片的话可以吧后台返回来的地址 放到upload的下面
            ，做成可以点击查看的类型
        4.是否支持批量上传
     -->
    <div>
        <p style="labelTitl" :style="{'width':labelWidthTag}">{{label}}</p>
        <input type="file" @change="uploadFile" ref="uploadInput"/>
    </div>
</template>

<script>

export default {
    props:['label','labelWidth','uploadOptions'],
    data(){
        return {

        }
    },
    computed:{
        labelWidthTag(){
            if(this.labelWidth !== undefined && this.labelWidth !== null){
                return this.labelWidth + 'px';
            }else{
                return '100px'
            }
        },
        fileName(){

        },
        typeTag(){
            return this.uploadOptions.type;
        },
        
    },
    methods:{
        uploadFile(){
            let file = this.$refs.uploadInput.files;
            
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