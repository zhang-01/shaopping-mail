<template>
  <div class="desc">
    <hr class="hr-top">
    <p>{{desc}}</p>
    <hr class="hr-bot">
  </div>
</template>

<script>
  export default {
    name: "ShopDesc",
    props:{
      desc:String
    }
  }
</script>

<style scoped>
  p{
    line-height: 30px;
    text-indent: 2em;
    margin: 10px 0;
  }
  hr{
    width: 30vw;
    height: 2px;
    background-color: #2c3e50;
    border: none;
  }
  .hr-bot{
    margin-left: 70vw;
    height: 2px;
  }
</style>