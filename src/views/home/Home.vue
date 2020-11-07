<template>
  <div class="home">
    <Nav></Nav>
    <Slideshow></Slideshow>
    <NavHome :recommend="recommend"></NavHome>
    <NavHome :recommend="recommend"></NavHome>
    <Recommend ></Recommend>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from "axios"
import Nav from "../../components/concent/Nav"
//轮播图组件占位
import Slideshow from "../../components/common/slideshow/Slideshow"

//四联促销按钮组件
import NavHome from "../../components/concent/NavHome"

  //流行新款精选
import Recommend from "./home_modules/Recommend"

  export default {
    name: 'Home',
    data(){
      return{
        //轮播图
        banner:{},
        //home也四联促销按钮
        recommend:{},
        //父元素发过来的值
        src:"/home/pop"
      }
    },
    created(){
      axios.get(" http://127.0.0.1:3000/home/multidata").then(value=>{
        // console.log(value);
        this.banner = value.data.data.banner
        this.recommend = value.data.data.recommend
      })
    },
    methods:{

    },
    components:{
      Nav,
      Slideshow,
      NavHome,
      Recommend
    }
  }

</script>
<style>
.home{
  background-color: #ccc;

}
</style>
