<template>
  <div class="discounts">
    <p>{{discounts.name}}</p>
    <div>
      <span v-for="item in discounts.promotions">
        <img src="" alt="">
        {{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Discounts",
    props:{
      discounts:Object
    }
  }
</script>

<style scoped>
.discounts{
  background-color: #fff;
  margin: 1vh 0;
  padding: 1vh 0;
}
  .discounts p{
    height: 4vh;
    line-height: 4vh;
  }
  .discounts span{
    margin: 2vw;
    color: red;
  }
</style>