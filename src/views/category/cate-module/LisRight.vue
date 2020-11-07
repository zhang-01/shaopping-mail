<template>
  <div class="lis-right">
    <TabBarItem v-for="item in lis" path="">
      <img :src="item.image" alt="" slot="icon" class="img">
      <p slot="txt">{{item.title}}</p>
    </TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from "../../../components/common/tabbar/TabBarItem"
  // import RightNav from "./RightNav"
  export default {
    name: "LisRight",
    props:{
      lis:Array
    },
    components:{
      TabBarItem,
      // RightNav
    }
  }
</script>

<style scoped>
.hid{
  display: none;
}
.lis-right .img{
  width: 15vw;
}
  .lis-right{
    margin-top: 8vh;
    width: 73vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    position: fixed;
    top: 0;
    left: 25vw;
    z-index: -1;
    height: 83vh;
   /*overflow: hidden;*/
   /* border: 1px solid red;*/
    overflow: auto;
  }
  .lis-right>div{
    margin-left: 4vw;
    margin-top: 2vh;
  }
</style>