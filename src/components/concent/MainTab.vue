<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" col="red" >
        <div slot="icon" class="fa fa-home item-icon"></div>
        <div slot="txt">首页</div>
      </TabBarItem>

      <TabBarItem path="/cate" col="red">
        <div slot="icon" class="fa fa-th-large item-icon"></div>
        <div slot="txt">分类</div>
      </TabBarItem>

      <TabBarItem path="/cart" col="red">
        <div slot="icon" class="fa fa-shopping-cart item-icon"></div>
        <div slot="txt">购物车</div>
      </TabBarItem>

      <TabBarItem path="/profile" col="red">
        <div slot="icon" class="fa fa-user item-icon"></div>
        <div slot="txt">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "../common/tabbar/TabBar"
  import TabBarItem from "../common/tabbar/TabBarItem"
  export default {
    name: "MainTab",
    computed:{
      isHidden(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>

</style>