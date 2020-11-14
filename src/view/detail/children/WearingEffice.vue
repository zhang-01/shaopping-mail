<template>
  <div class="wear">
    <h3>穿着效果</h3>
    <img :src="item" alt="" v-for="(item,index) in wear" :key="index">
  </div>
</template>

<script>
  export default {
    name: "WearingEffice",
    props:{
      wear:Array
    }
  }
</script>

<style scoped>
img{
  width: 100vw;
  margin-top: 5px;
}
</style>