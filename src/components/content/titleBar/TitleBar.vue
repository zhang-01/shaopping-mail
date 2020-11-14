<template>
  <div class="title-bar">
    <div class="title-item" v-for="(item,index) in titles"
         :key="item"
         @click="changeStyle(index)"
          >
      <span :class="{active:currentIndex===index?true:false}">
        {{item}}
      </span></div>
  </div>
</template>

<script>
  export default {
    name: "TitleBar",
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        // default(){
        //   return ["流行","新款","精选"]
        // }
      }
    },
    methods:{
      changeStyle(inde){
        this.currentIndex = inde
        this.$emit("itemClick",inde)
      }
    }
  }
</script>

<style scoped>
.title-bar{
  display: flex;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
}
  .title-item{
    flex: 1;
    text-align: center;
  }
  .active{
    color: pink;
    border-bottom: 2px solid pink;
  }
</style>