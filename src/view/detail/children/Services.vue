<template>
  <div class="services">
    <div class="servi-item" v-for="item in servi" :key="item.name">
      <img :src="item.icon" alt="">
      {{item.name}}</div>
  </div>
</template>

<script>
  export default {
    name: "Services",
    props:{
      servi:Array
    }
  }
</script>

<style scoped>
.services{
  display: flex;
  padding: 0 10px;
}
  .servi-item{
    flex: auto;
    font-size: 12px;
    text-align: center;
  }
  .servi-item img{
    height: 12px;
  }
.servi-item:last-of-type{
  /*flex: 3;*/
}
</style>