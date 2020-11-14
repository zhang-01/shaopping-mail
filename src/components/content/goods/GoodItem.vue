<template>
  <div class="goods-item" @click="urlData">
    <img :src="item.show.img" alt="">
    <p>{{item.title}}</p>
    <p>
      <span>￥{{item.price}}</span>
      <img src="../../../assets/img/common/collect.svg" alt="">
      <span>{{item.cfav}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    props:{
      item:Object
    },
    methods:{
      urlData(){
        this.$router.push({
          path:"/detail",
          query:{
            id:this.item.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
.goods-item{
  width: 50vw;
  text-align: center;
}
  .goods-item>img{
    width: 90%;
    margin-top: 20px;
    height: 40vh;
  }
  p{
    /*width: 90%;*/
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;

  }
  p span:first-of-type{
    color: red;
  }
  p img{
    width: 15px;
    vertical-align: center;
    margin-left: 5px;
  }
</style>