<template>
  <div class="list-left">
    <ul>
      <li v-for="(item,index) in lis"
          @click="cut(item.maitKey,index)"
          :class="{active:currentIndex==index?true:false}">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "LisLeft",
    data(){
      return{
        lis :[],
        currentIndex:0
      }
    },
    methods:{
      cut(id,inde){
        this.$emit("maitkey",id)
        this.currentIndex = inde
      }
    },
    created() {
      axios.get(" http://127.0.0.1:3000/category/title").then(value => {
        // console.log(value.data.data.category.list);
        this.lis = value.data.data.category.list
      })
    }
  }
</script>

<style scoped>
.list-left{
  margin-top: 8vh;
  width: 25vw;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  height: 83vh;
}
.list-left::-webkit-scrollbar {
  display: none;
}
  .list-left li{
    height: 6vh;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 6vh;
  }
  .active{
    background-image: linear-gradient(to bottom,#ddd,#f2f2f2,#ddd);
  }
</style>