<template>
  <div class="nav-home">
    <TabBarItem v-for="item in recommend.list" path="">
      <img :src="item.image" alt="" slot="icon">
      <p slot="txt">{{item.title}}</p>
    </TabBarItem>

  </div>
</template>

<script>
  //home页导航 复用底部导航
  import TabBarItem from "../common/tabbar/TabBarItem"
  export default {
    name: "NavHome",
    props:{
      recommend:Object
    },
    components:{
      TabBarItem
    }
  }
</script>

<style scoped>
.nav-home{
  display: flex;
  /*justify-content: space-around;*/
  background-color: #fff;
  padding: 2vh 0;
  margin-bottom: 2vh;
}
  .nav-home img{
    width: 15vw;
  }
</style>