<template>
  <div class="shopinfo">
    <div class="title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>

    <div class="product-descripiton">
      <div class="pro-left">
        <div class="all-salles">
          <p>{{allSalles}}万</p>
          <p>总销量</p>
        </div>

        <div class="all-baby">
          <p>{{shopInfo.cGoods}}</p>
          <p>全部商品</p>
        </div>
      </div>

      <div class="pro-right">
        <ul>
          <li v-for="item in shopInfo.score" :key="item.name">
            <span>{{item.name}}</span>
            <span :class="['score',{active:item.isBetter?true:false}]"> {{item.score}}</span>
            <span :class="['blue',{red:item.isBetter?true:false}]">{{item.isBetter ? "高" : "低"}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props:{
      shopInfo:Object
    },
    computed:{
      allSalles(){
        return (this.shopInfo.cSells/10000).toFixed(1)
      },
      gaodi(){
        return this.shopInfo.isBetter ? "高" : "低"
      }
    }

  }
</script>

<style scoped>
.shopinfo{
  padding: 0 10px;
}
  .title img{
    width:70px;
  }
  .title span{
    font-size: 18px;
    margin-left: 20px;
  }
.product-descripiton{
  display: flex;
  margin-top: 20px;
}
.product-descripiton>div{
  flex: 1;
}
  .pro-left{
    display: flex;
  }
  .pro-left>div{

    flex: 1;
    text-align: center;
  }
.pro-left>div p:first-of-type{
  font-size: 20px;
  font-weight: bold;
}

.pro-right{
  margin-top: -10px;

}
  .pro-right li{
    /*text-align: center;*/
    font-size: 14px;
    margin: 5px 0 5px 20px;
  }
.pro-right li span{
  margin: 0 5px;
}
.pro-right li span:last-of-type{
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  color: #fff;
  float: right;
  margin-right: 20px;
  font-size: 12px;
 }

  
  .score{
    color: green;
  }
  .active{
    color: red;
  }

  .blue{
    background-color:green;
  }
.red{
     background-color: red;
   }
</style>