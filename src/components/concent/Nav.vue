<template>
  <div class="nav">
    <NavBar>
      <span slot="left">

      </span>
      <span slot="center">
        <input type="text" placeholder="请输入搜索内容....">
      </span>
      <span slot="right">
        <a href="#">登录</a>
      </span>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../common/nav/NavBar"
  export default {
    name: "Nav",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
.nav{
  height: 7vh;
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
  .nav input{
    border-radius: 60px;
    height: 4vh;
    width: 60vw;
    outline: none;
    border: none;
    text-indent: 1em;
  }
.nav input::placeholder{
  color: #ccc;
}
  .nav a{
    color: white;
  }
</style>