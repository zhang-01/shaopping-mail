<template>
  <div class="shopping">
    <div class="shop-left">
      <img :src="shopping.shopLogo" alt="">
    </div>
    <div class="shop-center">
      <p>{{shopping.name}}</p>
      <span v-for="item in shopping.score">{{item.name}}</span>
    </div>
    <div class="shop-right"><a :href="shopping.allGoodsUrl">进店看看</a></div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfor",
    props:{
      shopping:Object
    }
  }
</script>

<style scoped>
.shopping{
  margin: 1vh 0;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop-left{
  width: 20vw;
  height: 10vh;
  text-align: center;
}
  .shop-left img{
    height: 8vh;
    margin: 1vh 0 0 4vw;
  }
.shop-center p{
  height: 5vh;
  line-height: 5vh;
}
  .shop-center span{
    color: red;
    font-size: 12px;
    margin-right: 3vw;
  }
</style>