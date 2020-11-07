#######################
使用说明
#####
1.需要将该插件引入到对应项目中
#####
2.在项目中挂载TabBar与TabBarItem两个组件
#####
3.在TabBarItem中有两个具名插槽,一个icon表示图标字体,一个txt表示文字内容
#####
4.在App.vue中使用
#####
   <TabBar>
      <TabBarItem>
         <div slot='icon'></div>
         <div slot='txt'></div>
      </TabBarItem>
   </TabBar>
#####
5.在TabBarItem组件上可以设置属性
    1.path属性:设置路由路径
    2.col属性:设置点击态的颜色