<template>
<!--  推荐按钮  复用头部搜索-->
  <div class="recommend">
    <NavBar>
      <p v-for="(item,index) in date"
         :slot="item.slot"
         @click="clik(index,item.url)"
          :class="{active:currentIndex===index?true:false}">{{item.name}}</p>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/nav/NavBar"
  export default {
    name: "Recommend",
    data(){
      return{
        date:[
          {name:"流行",slot:"left",url:"/home/pop"},
          {name:"新款",slot:"center",url:"/home/news"},
          {name:"精选",slot:"right",url:"/home/sell"},
        ],
        currentIndex:0
      }
    },
    methods:{
      clik(inde,url){
        this.$router.replace(url)
        this.currentIndex = inde

      }
    },
    components:{
      NavBar
    }
  }
</script>

<style scoped>
.recommend{
  background-color: #fff;
  height: 7vh;
}
  .recommend p{
    font-size: 16px;
    height: 5vh;
    line-height: 5vh;
  }
  .active{
    color: red;
    border-bottom: 1px solid red;
  }
</style>