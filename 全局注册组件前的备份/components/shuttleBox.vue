<template>
    <div class="shuttleBox le_comps_core_css">
        <div class="leftBox">
            <div class="le_form_row_item">
                <input labelWidth="80" label="未分配权限:" v-model="searchModel.unabsorbed"/>
                <button type="search" value="搜索" @click="changeLeftData"></button>
            </div>
            <ul>
                <li @click="selectLeftItem(item)" :class="item.cls" v-for="(item,idx) in lefeData" :key="idx" :id="item.code">{{item.name}}</li>
            </ul>
        </div>
        <div class="oprationBtn">
            <ul>
                <li @click="addAllItem"> >>> </li>
                <li @click="addSelectItem">  >  </li>
                <li @click="removeSelectItem">  <  </li>
                <li @click="removeAllItem"> <<< </li>
            </ul>
        </div>
        <div class="rightBox">
            <div class="le_form_row_item">
                <input labelWidth="80" label="已分配权限:" v-model="searchModel.assigned"></input>
                <button type="search" value="搜索" @click="changeRightData"></button>
            </div>
            <ul>
                <li  @click="selectRightItem(item)" :class="item.cls" v-for="(item,idx) in rightData" :key="idx" :id="item.code">{{item.name}}</li>
            </ul>
        </div>
        <button @click="showdata">查看的的 </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchModel:{
                unabsorbed:'',//未分配权限
                assigned:'' //已分配权限
            },
            lefeData:[
                {name:'沈清秋',id:'1',cls:''},
                {name:'洛冰河',id:'2',cls:''},
                {name:'魏无羡',id:'3',cls:''},
                {name:'蓝忘机',id:'4',cls:''},
                {name:'谢怜',id:'5',cls:''},
                {name:'花城',id:'6',cls:''},
            ],
            rightData:[
                {name:'沈清秋',id:'1',cls:''},
                {name:'洛冰河',id:'2',cls:''},
            ],
            selectItem:[],
            removeItem:[],
        }
    },
    computed:{
       
    },
    methods:{
        checkItemById(id,arr){
            let flag = true;
            arr && arr.forEach(item=>{
                if(id == item.id){
                    flag = false //flag = false  为  已有存在的
                }
            });
            return flag
        },
        // selectItemById(id){
        //     let res = {};
        //     this.lefeData && this.lefeData.forEach(item=>{
        //         if(id == item.id){
        //             ress = item
        //         }
        //     });
        //     return res
        // },
        getLeftData(){
            return this.lefeData;
        },
        getRightData(){
            return this.rightData;
        },
        setLeftData(data){
            this.lefeData = data;
        },
        setRightData(data){
            this.rightData = data;
        },
        removeSelectItemFromDataById(id,arr){
            arr.forEach((item,idx) => {
                if(id == item.id){
                    arr.splice(idx,1).concat(arr.splice(idx+1,-1))
                }
            });
            return arr;
        },
        selectLeftItem(item){
            if(item.cls !== "" && item.cls !== "disabled"){
                item.cls="";
                this.removeSelectItemFromDataById(item.id,this.selectItem)
            }else if(item.cls == "disabled"){
                return
            }else{
                let res = this.checkItemById(item.id,this.rightData);
                if(res){
                    item.cls="active";
                    this.selectItem.push(item)
                }else{
                    this.alert.showAlert("error","已分配权限中医存在当前数据")
                }
            }
        },
        selectRightItem(item){
            if(item.cls !== "" && irem.cls !== "disabled"){
                item.cls="";
                this.removeSelectItemFromDataById(item.id,this.removeItem)
            }else if(item.cls == "disabled"){
                return
            }else{
                item.cls="active";
                this.removeItem.push(item);
            }
        },
        addAllItem(){
            this.rightData = this.rightData.concat(this.lefeData);
            this.lefeData = [];
            this.rightData.forEach(item=>{
                item.cls = ""
            })
            this.selectItem = [];
        },
        addSelectItem(){
            this.selectItem.forEach(item=>{
                item.cls = "";
                this.removeSelectItemFromDataById(item.id,this.lefeData)
            })
            this.rightData = this.rightData.concat(this.selectItem);//吧选中的item加到右边去
            this.selectItem = [];
        },
        removeSelectItem(){
            this.removeItem.forEach((item,idx)=>{
                item.cls = "";
                this.removeSelectItemFromDataById(item.id,this.rightData)
            }) 
            this.lefeData = this.lefeData.concat(this.removeItem);//吧选中的item加到右边去
            this.removeItem = [];
        },
        removeAllItem(){
            this.lefeData = this.lefeData.concat(this.rightData);
            this.rightData = [];
            this.lefeData.forEach(item=>{
                item.cls = ""
            })
            this.removeItem = [];
        },

        changeLeftData(){
            let lefeData = [
                {name:'苹果',id:'3',cls:'disabled'},
                {name:'香蕉',id:'4',cls:''},
                {name:'橘子',id:'5',cls:''},
                {name:'葡萄',id:'6',cls:''},
            ];
            this.setLeftData(lefeData)
        },
        changeRightData(){
            let rightData = [
                {name:'芒果',id:'7',cls:''},
                {name:'栗子',id:'8',cls:''},
                {name:'核桃',id:'9',cls:''},
                {name:'花生',id:'0',cls:''},
            ];
            this.setRightData(rightData)
        },
        showdata(){
            console.log(this.lefeData)
            console.log(this.rightData)
        }

    }
}
</script>

<style scoped>
.shuttleBox{
    width: 100%;
    height: 100%;
}

.shuttleBox .leftBox{
    width: 400px;
    height: 100%;
    display:inline-block;
    vertical-align: top;
}

.shuttleBox .oprationBtn{
    width: 100px;
    height: 100%;
    display: inline-block;   
    margin-top: 62px;
    position: relative;
}

.shuttleBox .oprationBtn ul{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: auto;
}

.shuttleBox .oprationBtn ul li:last-child{
    border-bottom: none;
}


.shuttleBox .rightBox{
    width: 400px;
    height: 100%;
    display:inline-block;
    vertical-align: top;
}

.shuttleBox ul{
    height: 100%;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.shuttleBox ul li{
    line-height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}

.shuttleBox ul li.active{
    background-color: pink;
}

.shuttleBox ul li.disabled{
    color: #ccc;
    cursor: not-allowed;
}


</style>