<template>
  <div class="titl">
    <h1>{{titel.price}} <span>{{titel.oldPrice}}</span></h1>
    <p>{{titel.txt}}</p>
    <p class="city">{{titel.sendAddress}}</p>
  </div>
</template>

<script>
  export default {
    name: "DetaTitle",
    data(){
      return{

      }
    },
    props:{
      titel:Object

    },
    created() {
      console.log(this.titel.txt)
    }
  }
</script>

<style scoped>
  .titl{
    background-color: #fff;
    padding: 1vh 0;
  }
.titl h1{
  padding-top: 2vh;
  text-indent: 1em;
}
  .titl span{
    text-decoration: line-through;
    font-size: 17px;
    font-weight: normal;
    color: #ccc;
    margin-left: 2vw;
  }
  .titl p{
    width: 90vw;
    margin: 1vh auto;
  }
  .city{
    color: #8c8c8c;
    font-size: 12px;
  }
</style>