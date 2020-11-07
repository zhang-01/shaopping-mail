<template>
  <div class="cate">
    <Nav></Nav>
    <LisLeft @maitkey="getData"></LisLeft>
    <LisRight :lis="lis"></LisRight>
  </div>
</template>

<script>
  import axios from "axios"
  import Nav from "../../components/concent/Nav"
  import LisRight from "./cate-module/LisRight"
  import LisLeft from "./cate-module/LisLeft"
  export default {
    name: "Category",
    data(){
      return{
        key:3627,
        lis:[]
      }
    },
    methods:{
      getData(id){
        // this.key=id
        axios.get("http://127.0.0.1:3000/category/item?maitKey="+id).then(value => {
          console.log(value.data.data.list);
          this.lis = value.data.data.list
        })
      }
    },
    created(){
      axios.get("http://127.0.0.1:3000/category/item?maitKey="+this.key).then(value => {
        console.log(value.data.data.list);
        this.lis = value.data.data.list
      })
    },
    update(){

    },
    components:{
      Nav,
      LisLeft,
      LisRight
    }
  }
</script>

<style scoped>
.cate{
  display: flex;
}
</style>