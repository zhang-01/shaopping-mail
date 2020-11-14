<template>
  <div class="details">
    <TopBar bgCol="#f7f7f7">
      <div slot="left" @click="backHome">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="ti-center">
        <div :class="['ti-item',{active:currentIndex===index?true:false}]"
             v-for="(item,index) in topTitles"
             :key="item"
             @click="col(index)">
          {{item}}</div>
      </div>
    </TopBar>
<!--    <div class="banner">-->
<!--      <Swiper>-->
<!--        <SwiperItem v-for="(item,index) in detailGoods.bannerImg" :key="index">-->
<!--          <img :src="item" alt="">-->
<!--        </SwiperItem>-->
<!--      </Swiper>-->
<!--    </div>-->
    <TopImg :imgs="detailGoods.bannerImg"></TopImg>
    <ShopInfo :shoppingInfo="detailGoods.shoppingInfo"></ShopInfo>
    <Columns :columns="detailGoods.columns"></Columns>
    <Servi :servi="detailGoods.services"></Servi>
    <Shop :shopInfo="detailGoods.shopInfo"></Shop>
    <div class="shopIn">
      <button class="shop-in">进店逛逛</button>
    </div>
    <ShopDesc :desc="detailGoods.desc"></ShopDesc>
    <WearingEffice :wear="detailGoods.detailInfo"></WearingEffice>

  </div>
</template>

<script>
  import {request} from "../../network/axios";
  // import {Swiper,SwiperItem} from "@/components/common/swiper"

  import TopBar from "@/components/common/topBar/TopBar"
  import ShopInfo from "./children/DatailShopInfor"
  import Columns from  "./children/Columns"
  import TopImg from "./children/TopImg"
  import Servi from "./children/Services"
  import  Shop from  "./children/ShopInfo"
  import ShopDesc from "./children/ShopDesc"
  import WearingEffice from "./children/WearingEffice"

  export default {
    name: "Detail",
    data(){
      return{
        detailGoods:{
          bannerImg:[],
          shoppingInfo:{
            title:"",
            price:"",
            oldPrice:"",
            desc:""
          },
          columns:[],
          services:[],
          shopInfo:{},
          desc:"",
          detailInfo:[],
          rate:[]
        },
        currentIndex:0,
        topTitles:["商品","参数","评论","推荐"]
      }
    },
    methods:{
    getDetilData(iid){
      request({
        url:"/detail",
        params:{
          goodsid:iid
        }
      }).then(value=>{
        // console.log(value);
        var da = value.data.result
        this.detailGoods.bannerImg = da.itemInfo.topImages
        this.detailGoods.shoppingInfo.title = da.itemInfo.title
        this.detailGoods.shoppingInfo.price = da.itemInfo.price
        this.detailGoods.shoppingInfo.oldPrice = da.itemInfo.oldPrice
        this.detailGoods.shoppingInfo.desc = da.itemInfo.discountDesc
        this.detailGoods.columns.push(da.columns[0],da.columns[1],da.shopInfo.services[da.shopInfo.services.length-1].name)
        this.detailGoods.services = da.shopInfo.services;
        this.detailGoods.services.pop()
        this.detailGoods.shopInfo = da.shopInfo
        this.detailGoods.desc = da.itemInfo.desc
        this.detailGoods.detailInfo = da.detailInfo.detailImage[0].list
        this.detailGoods.itemParams = da.itemParams
        this.detailGoods.rate = da.rate.list

        console.log(this.detailGoods);
      })
    },
      backHome(){
      this.$router.push("/home")
      },
      col(ind){
      this.currentIndex=ind
      }
    },
    created() {
      this.getDetilData(this.$route.query.id)
      // console.log(this.$route.query.id);
    },
    components:{
      TopBar,
      // Swiper,
      // SwiperItem,
      ShopInfo,
      Columns,
      TopImg,
      Servi,
      Shop,
      ShopDesc,
      WearingEffice
    }
  }
</script>

<style scoped>
.ti-center{
  display: flex;
}
img{
  margin-top: 10px;
  margin-left: 5px;
}
  .ti-item{
    flex: 1;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
  }
  .active{
    color:red
  }
  .banner{
    height: 300px;
    overflow: hidden;
  }
  .shop-in{
    display: block;
    width: 50vw;
    margin: 20px auto;
    height: 35px;
    border-radius: 10px;
    color: #fff;
    outline: none;
    background-color: #ccc;
    font-size: 18px;
    border: none;
    /*margin: 10px auto;*/
  }
  /*img{*/
  /*  width: 100vw;*/
  /*}*/

  /*.details{*/
  /*  margin-bottom: 200px;*/
  /*}*/
</style>