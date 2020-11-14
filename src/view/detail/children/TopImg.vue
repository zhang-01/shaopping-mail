<template>
  <div class="topimg">
    <img :src="item" alt="" v-for="item in imgs">
  </div>
</template>

<script>
  export default {
    name: "TopImg",
    props:{
      imgs:Array
    }
  }
</script>

<style scoped>
.topimg{
  width: 100vw;
  height: 40vh;
  display: flex;
  /*position: relative;*/
  flex-wrap: nowrap;
  background-color: #fff;
  overflow: scroll;
  padding: 1vh 0;
}
  .topimg img{
    width: 50vw;
    height: 100%;
    margin-left: 10vw;

  }
</style>