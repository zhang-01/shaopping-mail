<template>
  <div class="shop-info">
    <p>{{shoppingInfo.title}}</p>
    <h2>
      <span class="price">{{shoppingInfo.price}}</span>
      <span class="old-price">{{shoppingInfo.oldPrice}}</span>
      <span class="desc">{{shoppingInfo.desc}}</span>
    </h2>

  </div>
</template>

<script>
  export default {
    name: "DatailShopInfor",
    props:{
      shoppingInfo:Object
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 0 10px;
  }
.price{
  color:hotpink;
}
  .old-price{
    font-size: 16px;
    text-decoration: line-through;
    color:#cccccc;
    margin: 0 5px;
  }
  .desc{
    font-size: 12px;
    color: #fff;
    border: 1px solid #ccc;
    background-color: hotpink;
    border-radius: 5px;
    padding: 3px 5px;
    position: relative;
    top: -10px;
  }
  p{
    margin: 10px 0;
    font-size: 10px;
  }
</style>