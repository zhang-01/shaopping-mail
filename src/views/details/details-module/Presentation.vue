<template>
  <div class="pre">
    <img :src="item" alt="" v-for="item in datail">
  </div>
</template>

<script>
  export default {
    name: "Presentation",
    props:{
      datail:Array
    }
  }
</script>

<style scoped>
  img{
    width: 100vw;
    margin: 1vh auto;
  }
  .pre{
    margin-bottom: 7vh;
  }
</style>