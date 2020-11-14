<template>
  <TabBar>
    <TabBarItem path="/home" clo="pink">
      <div slot="icon" class="fa fa-home"></div>
      <div slot="text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" clo="green">
      <div slot="icon" class="fa fa-bars"></div>
      <div slot="text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shoppingCart" clo="hotpink">
      <div slot="icon" class="fa fa-shopping-cart"></div>
      <div slot="text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" clo="red">
      <div slot="icon" class="fa fa-user"></div>
      <div slot="text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
    import TabBar from "../common/tabBar/TabBar"
    import TabBarItem from "../common/tabBar/TabBarItem"

    export default {
        name: "MainTab",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>