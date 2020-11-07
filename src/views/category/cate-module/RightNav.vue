<template>
  <div class="r-nav">
    <NavBar>
      <p slot="center">发现更多</p>
    </NavBar>
<!--    <News></News>-->
  </div>
</template>

<script>
  import NavBar from "../../../components/common/nav/NavBar"
  import News from "../../home/home_modules/News"
  export default {
    name: "RightNav",
    data(){
      return{

      }
    },
    components:{
      NavBar,
      News
    }
  }
</script>

<style scoped>
.r-nav p{
  width: 70vw;
  text-align: center;
  height: 8vh;
  font-size: 20px;
  line-height: 8vh;
  color: #f75000;
}
</style>