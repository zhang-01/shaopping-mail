<template>
  <div class="columns">
    <div v-for="item in columns" :key="item" class="col-item">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: "Columns",
    props:{
      columns:Array
    }
  }
</script>

<style scoped>
.columns{
  display: flex;
  /*margin-top: 20px;*/
  width: 95%;
  margin: 10px auto;
  padding-bottom: 10px;

  border-bottom: 1px solid #cccccc;
}
  .col-item{
    flex: 1;
    color: #3E3E3E;
    font-size: 10px;
  }
  .col-item:last-of-type{
    text-align: right;
  }
</style>