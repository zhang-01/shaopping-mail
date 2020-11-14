<template>
  <div class="good">
    <GoodsItem v-for="item in goods.list" :item="item"></GoodsItem>
  </div>
</template>

<script>
  import GoodsItem from "./GoodItem"
  export default {
    name: "Goods",
    components:{
      GoodsItem
    },
    props:{
      goods:Object
    }
  }
</script>

<style scoped>
.good{
  display: flex;
  flex-wrap: wrap;
}
</style>