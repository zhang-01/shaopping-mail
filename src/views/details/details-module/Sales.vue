<template>
  <div class="sales">
    <span v-for="item in sales">{{item}}</span>
  </div>
</template>

<script>
  export default {
    name: "Sales",
    props:{
      sales:Array
    }
  }
</script>

<style scoped>
.sales{
  background-color: #fff;
  height: 5vh;
}
  .sales span{
    height: 5vh;
    line-height: 5vh;
    margin: 0 2vw;
    color: red;
  }
</style>