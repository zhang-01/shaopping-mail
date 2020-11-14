<template>
  <div class="back-top" v-show="isshow" @click="backTop">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    props:{
      isshow:{
        type:Boolean,
        default:false
      },

    },
    methods:{
      backTop(){
        this.$emit("backTop")
      }
    }
  }
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom: 80px;
  right: 30px;
  width: 40px;
  height: 40px;
  opacity:0.5
}
  .back-top img{
    width: 100%;
  }
</style>