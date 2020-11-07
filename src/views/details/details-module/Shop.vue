<template>
  <div class="shop">
    <div class="shop-left">
      <slot name="left"></slot>
    </div>
    <div class="shop-right" @click="option">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Shop",
    props:{
      id:Object
    },
    methods:{
      option(){
       this.$emit("clik",this.id)
      }
    }
  }
</script>

<style scoped>
.shop{
  display: flex;
  background-color: #fff;
  margin: 1vh 0;
  padding: 2vh 0;
}

</style>