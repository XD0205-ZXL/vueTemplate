<template>
        <!-- 
            1.有标签, 可设置标签的宽度,是否必填
            v-model，只读状态, 是否支持输入搜索
            2.单选和多选
            3.支持ajax搜索和前端搜索筛选
            4.如果用ajax搜索过后，我选择了一个数据，然后在清除了数据以后，
              需要重新请求完整的下拉option数据
        -->
    <div class="selectContent">
        <label :style="{width:labelWidthVal}">{{labelName}}</label>
        <div class="selectInput" @click="inputFocus" @mouseenter="showArr" @mouseleave="hideArr">
            <!-- 选中的选项 -->
            <selectItems :dataSource="selectedArr"></selectItems>
            <input v-model="searchName" :readonly="readonlyTag" ref="inputDom" @click.stop="showOption"  class="searchInput" :class="{'readonlyTag':readonlyTag}"/>
            <i v-if="selectedArr.length < 1" class="asBtn hasOption fa fa-chevron-down icon-del"></i>
            <i v-else @click.stop="clearOption" class="asBtn clearBtn fa fa-times-circle"></i>
            <div class="msgContent">
                <p class="msg" v-show="msg">{{msg}}</p>
                <p class="tip" v-show="tip">{{tip}}</p>
            </div>
            <!-- 下拉选项卡 -->
            <selectOptions :showOrHide="showSelectOption" @deliveryItem="changeSelectItem" :dataSource="buttomArray" :displayName="displayName" :displayValue="displayValue"></selectOptions>
        </div>
    </div>
</template>

<script>
import selectOptions from './selectOptions';
import selectItems from "./selectItems";
export default {
    components:{selectOptions,selectItems},
    props:['multiple','enableInput',"dataSource","displayName",'displayValue','value',
            "readonly",'labelName','msg','tip','getAjaxData'],
    data(){
        return {
            data:[],
            showSelectOption:false,
            searchName:'',
            bottomData:[],
            clickBodyhideOption:true,
        }
    },
    watch:{
        value(val){
            this.setValue(val);
        },
        dataSource(val){
            if(val && val.length > 0){
                this.init(val);
                this.setValue(this.value);
            }else{
                this.init([]);
                this.$emit("input","");
            };
        }
    },
    computed:{
        multipletag(){
            if(this.multiple !== null && this.multiple !== undefined){
                return true;
            }else{
                return false;
            }
        },
        readonlyTag(){
            if(this.readonly && this.readonly == ""){
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
        labelWidthVal(){
            if(this.$attrs.labelWidth > 0 && this.$attrs.labelWidth !== "" && this.$attrs.labelWidth !== null && this.$attrs.labelWidth !== undefined){
                return this.$attrs.labelWidth + "px"
            }else{
                return '100px'
            }
        },
        selectedArr(){
            return this.getSelectItem(this.data,this.displayValue).res;
        },
        buttomArray(){
            let that = this;
            if(that.searchName != ""){
                return that.data.filter(item =>{
                    return item[that.displayValue].indexOf(that.searchName) != -1
                })
            };
            return that.data;
        }
    },
    methods:{
        clearOption(){
            let neweArr = [];
            this.data.forEach(item=>{
                item.ck = false;
                item.cls = "selectItem";
                neweArr.push(item)
            })
            this.data = neweArr;
            this.showSelectOption = false;
            this.$emit("input",this.getSelectItem().vals.join(","));
            this.$emit("change",this.getSelectItem().vals.join(","));

            // this.onEmit()
        },
        showOption(){
            // 不支持输入，只展示下拉选项
            if(this.enableInputTag){
                this.showSelectOption = true
            }else{
                return
            }
        },
        inputFocus(){
            if(this.readonlyTag){
                return
            }else{
                this.showSelectOption = true;
                this.$refs.inputDom.focus();
            };
            this.clickBodyhideOption = true;
        },
        hideSelect(){

        },
        cloneObj(source){
             if(source){
                return JSON.parse(JSON.stringify(source));
            }
            return null;
        },
        addPrimaryAndCk(data,ck){
            data.map(item=>{
                if(ck != undefined){
                    if(!ck){
                        item.ck = false;
                    }else{
                        item.ck = true;
                    }
                }else{
                    //初始化的时候 ，如果指定了ck有值的话就返回值，没有指定的话那就默认为fale
                    item.ck = false;
                };
                item.cls = "";
            });
            return data;
        },
        init(val){
            let arr = this.cloneObj(val);
            this.data = this.addPrimaryAndCk(arr);
        },
        resetData(){
            this.data.map(item=>{
                item.ck = false;
                item.cls = "";
            })
        },
        getMatchedItem(data,displayValue,val){
            let res = null;
            data.forEach(item=>{
                if(item[displayValue] !== null && item[displayValue] !== undefined && item[displayValue] == val){
                    res = item
                }
            });
            return res;
        },
        setValue(ids){
            let that = this;
            ids = ids.toString();
            //重置所有下拉选项的选中状态
            this.resetData();
            ids.split && ids.split(",").forEach(val=>{
                let tmp = this.getMatchedItem(that.data,that.displayValue,val);
                if(tmp){
                    tmp.ck = true;
                    tmp.cls = "active fa fa-check"
                }
            })
        },
        getSelectItem(data,displayValue){
            let arr = {res:[],vals:[]};
            this.data && this.data.forEach(item => {
                if(item.ck == true){
                    arr.res.push(item);
                    if(displayValue){
                        arr.vals.push(item[displayValue])
                    }
                }
            });
            return arr;
        },
        changeSelectItem(obj){
            let that = this;
            //多选
            if(that.multipletag){ 
                obj.ck = !obj.ck;
                obj.cls = !obj.ck?"":"active fa fa-check";
            }else{  
            //单选
                that.data.forEach(item => {
                    if(obj[that.displayValue] == item[that.displayValue]){
                        item.ck = true
                        item.cls = "active fa fa-check"
                    }else{
                        item.ck = false;
                        item.cls = ""
                    }
                });
                that.showSelectOption = false;
            };
            this.onEmit()
        },
        searchItem(val){
            let res = [];
            let that = this;
            if(that.searchName){
                that.data.forEach(item=>{
                    if(item[that.displayValue].indexOf(that.searchName)){
                        res.push(item)
                    }
                })
            };
            that.buttomArray = res;
        },
        onEmit(){
            let selectItems = this.getSelectItem(this.data,this.displayValue).vals.join(",");
            this.$emit("input",selectItems);
            this.$emit("change",selectItems);
        },  
        showArr(){

        },
        hideArr(){

        }
    },
    mounted(){
        // 如果dataSource有值的话就直接初始化(初始化包括：加唯一的id，加cls,加ck,)
        //还得判断当前是否有用于双向绑定的值，如果有的话就得选中指定的选项 
        if(this.dataSource && this.dataSource.length > 0){
            this.init(this.dataSource);
        };
        this.setValue(this.value);
        let that = this;
        // document.body.onclick=function(e){ 
        //     that.showSelectOption = false;
        //     e.stopPropagation();
        // }; 
    }
}
</script>

<style scoped>
.selectInput *{
    box-sizing: border-box;
}
.selectContent{
    width: 500px;
    position: relative;
    display: flex;
}
.selectInput{
    border: 1px solid #909090;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
}
.selectTagsBox{
    /* flex: 1; */
}
.searchInput{
    width: 100px;
    height: 35px;
    border: none;
    background-color: transparent;
    float: right;
    border-radius: 3px;
    padding: 0 10px;
    padding-right: 22px;
}
.asBtn{
    width: 12px;
    height: 12px;
    display: block;
    cursor: pointer;
    right: 6px;
    font-size: 12px;
    text-align: center;
}
.clearBtn{
    position: absolute;
    top: 9px;
    right: 0;
    /* display: none; */
}
.hasOption{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.readonlyTag{
    background-color: #ddd;
}
.msg{
    color: #f4364c;
}
.tip{
    color: aqua;
}
.msgContent{
    position: absolute;
    top: 100%;
}
</style>