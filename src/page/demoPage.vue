<template>
    <div>
        <p class="pageNmae">组件使用页</p>
        <inputTmp label="姓名"></inputTmp>

         <div class="layui-row">
            <div class="layui-col-xs4">
                <label class="layui-form-label">登录账号</label>
                <div class="layui-input-block">
                    <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
                </div>
            </div>
            <div class="layui-col-xs4">
                <label class="layui-form-label">用户姓名</label>
                <div class="layui-input-block">
                    <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
                </div>
            </div>
            <div class="layui-col-xs4">
                <label class="layui-form-label">绑定ITCode</label>
                <div class="layui-input-block">
                    <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
                </div>
            </div>
        </div>
        <div style="margin:10px 0;text-align:right">
            <button type="button" class="layui-btn layui-btn-primary layui-btn-sm">原始按钮</button>
            <button type="button" class="layui-btn layui-btn-sm">默认按钮</button>
            <button type="button" class="layui-btn layui-btn-normal layui-btn-sm">百搭按钮</button>
            <button type="button" class="layui-btn layui-btn-warm layui-btn-sm">暖色按钮</button>
            <button type="button" class="layui-btn layui-btn-danger layui-btn-sm">警告按钮</button>
            <button type="button" class="layui-btn layui-btn-disabled layui-btn-sm">禁用按钮</button>
        </div>

        <div class="layui-btn-container">
            <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中的table行数据</button>
            <table class="layui-hide" id="test" lay-filter="test"></table>
        </div>

        <fieldset class="layui-elem-field site-demo-button" style="margin-top: 30px;padding:30px">
            <div class="layui-btn-container">
                <button type="button" class="layui-btn layui-btn-sm" lay-demo="getChecked">获取选中节点数据</button>
                <button type="button" class="layui-btn layui-btn-sm" lay-demo="setChecked">勾选指定节点</button>
                <button type="button" class="layui-btn layui-btn-sm" lay-demo="reload">重载实例</button>
            </div>
            <legend>树新结构主题</legend>
            <div id="test12" class="demo-tree-more"></div>
        </fieldset>

    </div>
</template>

<script>
import inputTmp from './input';
export default {
    components:{inputTmp},
    data(){
        return{
            
        }
    }
}
layui.use(['tree', 'util','table'], function(){
  var tree = layui.tree
  ,layer = layui.layer
  ,util = layui.util,
  table = layui.table,
  //模拟数据1
  data1 = [{
    title: '江西'
    ,id: 1
    ,children: [{
      title: '南昌'
      ,id: 1000
      ,children: [{
        title: '青山湖区'
        ,id: 10001
      },{
        title: '高新区'
        ,id: 10002
      }]
    },{
      title: '九江'
      ,id: 1001
    },{
      title: '赣州'
      ,id: 1002
    }]
  },{
    title: '广西'
    ,id: 2
    ,children: [{
      title: '南宁'
      ,id: 2000
    },{
      title: '桂林'
      ,id: 2001
    }]
  },{
    title: '陕西'
    ,id: 3
    ,children: [{
      title: '西安'
      ,id: 3000
    },{
      title: '延安'
      ,id: 3001
    }]
  }];

  //table数据
  let  tableData = [
 {id: 10000, username: "user-0", sex: "女", city: "城市-0", sign: "签名-0", experience: 255, logins: 24},
 {id: 10001, username: "user-1", sex: "男", city: "城市-1", sign: "签名-1", experience: 884, logins: 58},
 {id: 10002, username: "user-2", sex: "女", city: "城市-2", sign: "签名-2", experience: 650, logins: 77},
 {id: 10003, username: "user-3", sex: "女", city: "城市-3", sign: "签名-3", experience: 362, logins: 157},
 {id: 10004, username: "user-4", sex: "男", city: "城市-4", sign: "签名-4", experience: 807, logins: 51},
 {id: 10005, username: "user-5", sex: "女", city: "城市-5", sign: "签名-5", experience: 173, logins: 68},
 {id: 10006, username: "user-6", sex: "女", city: "城市-6", sign: "签名-6", experience: 982, logins: 37},
 {id: 10007, username: "user-7", sex: "男", city: "城市-7", sign: "签名-7", experience: 727, logins: 150},
 {id: 10008, username: "user-8", sex: "男", city: "城市-8", sign: "签名-8", experience: 951, logins: 133},
 {id: 10009, username: "user-9", sex: "女", city: "城市-9", sign: "签名-9", experience: 484, logins: 25}
  ]
  
  //模拟数据2
  ,data2 = [{
    title: '早餐1'
    ,id: 1
    ,children: [{
      title: '油条5'
      ,id: 5
    },{
      title: '包子6'
      ,id: 6
    },{
      title: '豆浆7'
      ,id: 7
    }]
  },{
    title: '午餐2'
    ,id: 2,
    // checked: true,
    children: [{
      title: '藜蒿炒腊肉8'
      ,id: 8
    },{
      title: '西湖醋鱼9'
      ,id: 9
    },{
      title: '小白菜10'
      ,id: 10
    },{
      title: '海带排骨汤11'
      ,id: 11
    }]
  },{
    title: '晚餐3'
    ,id: 3
    ,children: [{
      title: '红烧肉12'
      ,id: 12
      ,fixed: true
    },{
      title: '番茄炒蛋12'
      ,id: 12
    }]
  },{
    title: '夜宵4'
    ,id: 4
    ,children: [{
      title: '小龙虾14'
      ,id: 14,
    //   checked: true
    },{
      title: '香辣蟹15'
      ,id: 15
      ,disabled: true
    },{
      title: '烤鱿鱼16'
      ,id: 16
    }]
  }];
 
  //基本演示
  tree.render({
    elem: '#test12'
    ,data: data2
    ,showCheckbox: true  //是否显示复选框
    ,id: 'demoId1'
    ,isJump: true //是否允许点击节点时弹出新窗口跳转
    ,click: function(obj){
      var data = obj.data;  //获取当前点击的节点数据
      layer.msg('状态：'+ obj.state + '<br>节点数据：' + JSON.stringify(data));
    }
  });
  
  //按钮事件
  util.event('lay-demo', {
    getChecked: function(othis){
      var checkedData = tree.getChecked('demoId1'); //获取选中节点的数据
      
      layer.alert(JSON.stringify(checkedData), {shade:0});
    }
    ,setChecked: function(){
        let arr = [2,3,4]
      tree.setChecked('demoId1', arr); //勾选指定节点
    }
    ,reload: function(){
      //重载实例
      tree.reload('demoId1', {
        
      });
      
    }
  });

   table.render({
    elem: '#test'
    ,url:'/demo/table/user/'
    ,toolbar: '#toolbarDemo'
    ,cols: [[
      {type:'radio'}
      ,{field:'id', width:80, title: 'ID', sort: true}
      ,{field:'username', width:80, title: '用户名'}
      ,{field:'sex', width:80, title: '性别', sort: true}
      ,{field:'city', width:80, title: '城市'}
      ,{field:'sign', title: '签名', minWidth: 100}
      ,{field:'experience', width:80, title: '积分', sort: true}
      ,{field:'score', width:80, title: '评分', sort: true}
      ,{field:'classify', width:80, title: '职业'}
      ,{field:'wealth', width:135, title: '财富', sort: true}
    ]]
    ,page: true
  });
  
  //头工具栏事件
  table.on('toolbar(test)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id); //获取选中行状态
    switch(obj.event){
      case 'getCheckData':
        var data = checkStatus.data;  //获取选中行数据
        layer.alert(JSON.stringify(data));
      break;
    }
  });




  
});




</script>

<style scoped>

</style>