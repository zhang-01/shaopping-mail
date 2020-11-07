<template>
  <div class="details">
    <NarBar>
      <span slot="left" class="fa fa-chevron-left" @click="toHome"></span>
      <span slot="center" class="center">
        <span>商品</span>
        <span>详情</span>
        <span>评价</span>
      </span>
    </NarBar>
    <TopImg :imgs="topImg"></TopImg>
    <DetaTitle :titel="titel"></DetaTitle>
    <Discounts :discounts="discounts"></Discounts>
    <Shop>
      <div slot="left" v-for="item in shopInfo" class="shopInfo">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
      <div slot="right" class="sho-R"></div>
    </Shop>
    <Shop :id="skuInfo" @clik="shopId">
      <div slot="left" >
        <p class="colo">请选择颜色:尺码</p>
      </div>
      <div slot="right" class="fa fa-chevron-right shop-R"></div>
    </Shop>
    <Options :shop="shopkey"></Options>
    <Sales :sales="columons"></Sales>
    <ShopInfor :shopping="shopping"></ShopInfor>
    <Presentation :datail = "Presentation"></Presentation>
  </div>
</template>

<script>
  import axios from "axios"
  import NarBar from "../../components/common/nav/NavBar"

  import TopImg from "./details-module/TopImg"
  import DetaTitle from "./details-module/Title"
  import Discounts from "./details-module/Discounts"
  import Shop from "./details-module/Shop"
  import Options from "./details-module/Options"
  import Sales from "./details-module/Sales"
  import ShopInfor from "./details-module/ShopInfor"
  import Presentation from "./details-module/Presentation"
  export default {
    name: "Details",
    data(){
      return{
        topImg:[],
        titel:{
          txt:"",
          oldPrice:"",
          price:"",
          sendAddress:""
        },
        discounts:{
          name:"促销",
          promotions:[]
        },
        shopInfo:[],
        skuInfo:{},
        shopkey:{
          clas:"",
          txt:[]
        },
        columons:[],
        shopping:{},
        Presentation:[]
      }
    },
    computed:{
      id(){
        return this.$route.query.id
      }
    },
    created(){
      // console.log(this.iid);
      axios.get("http://127.0.0.1:3000/detail?goosId="+this.id).then(value => {
        console.log(value.data.result);
        this.topImg=value.data.result.itemInfo.topImages
        this.titel.txt=value.data.result.itemInfo.title
        this.titel.oldPrice=value.data.result.itemInfo.oldPrice
        this.titel.price=value.data.result.itemInfo.price
        this.titel.sendAddress=value.data.result.itemInfo.extra.sendAddress
        this.discounts.promotions=value.data.result.promotions.list
        this.shopInfo=value.data.result.shopInfo.services
        this.skuInfo=value.data.result.skuInfo
        this.columons = value.data.result.columns
        this.shopping = value.data.result.shopInfo
        this.Presentation = value.data.result.detailInfo.detailImage[0].list
      })
    },
    methods:{
      toHome(){
        this.$router.replace("/home")
      },
      shopId(id1){
        this.shopkey.txt = id1;
        this.shopkey.clas = true;
        console.log(this.shopkey);

        // console.log(arr);
      }
    },
    components:{
      NarBar,
      TopImg,
      DetaTitle,
      Discounts,
      Shop,
      Options,
      Sales,
      ShopInfor,
      Presentation
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
.details{
  /*height: 7vh;*/
  background-color: #dddddd;
}
  .details .center span{
    margin: 0 5vw;
  }
  .shopInfo{
    display: inline-block;
    height: 3vh;
    line-height: 3vh;
    /*padding: 1vh 0 0 0;*/
    margin: 0 3vw;
    font-size: 10px;
    color: red;
  }
  .shopInfo img{
    width: 3vw;
  }
  .shop-R{
    margin-left: 68vw;
    margin-top: 2vh;
  }
  .colo{
    height: 5vh;
    line-height: 5vh;
  }
</style>