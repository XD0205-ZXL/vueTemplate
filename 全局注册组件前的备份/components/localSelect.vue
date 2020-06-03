<template>
    <div>
        <!-- 
        select 组件：
            // 1. 是有label   
            // 2. 可以设置labelwidth 
            3. 可以 用 v-model
            4. 有data-sourc ()
            4. 根据dataSource数组中的数据，展示 值 和 value
            5. 有clear()
     -->
        <div style="position:relative;width:auto">
            <span class="asLabel">选择爱好:</span>
            <div>
                <div>
                    <i class="asLabel"> * </i>
                    <input type="text" :value="curSelectData"/>
                </div>
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["selectedData"],
    data(){
       return {
           curSelectData:'',
           selectData:[
               {code:'1',name:'沈清秋'},
               {code:'2',name:'洛冰河'},

               {code:'3',name:'魏无羡'},
               {code:'4',name:'蓝忘机'},

               {code:'5',name:'谢怜'},
               {code:'6',name:'花城'},
           ]
       } 
    },
    computed:{
        curSelectedData(){
            if(this.selectedData && this.selectedData.length > 0){
                this.curSelectedData = selectedData.splite(',')
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