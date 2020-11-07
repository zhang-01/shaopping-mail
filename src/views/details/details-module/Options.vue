<template>
  <div :class="['options',{active:shop.clas}]" @click.stop="hidden">
    <div class="options-item">
      <p class="op-title">
        <span>{{shop.txt.title}}</span>
      </p>
      <div v-for="item in shop.txt.props">
        <p>
          <span class="op-label">{{item.label}} <br>
            <span v-for=" i in item.list">{{i.name}}</span>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Options",
    data(){
      return{
        // boo:this.shop.clas
      }
    },
    methods:{
      hidden(e){
        // e. stopPropagation ()
        console.log(e.target.className);
        if(e.target.className =="options active"){
          this.shop.clas = false
        }
      }
    },
    props:{
      shop:Object
    }
  }
</script>

<style scoped>
.options{
  width: 100vw;
  height: 86vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 7vh;
  left: 0;
  display: none;
}
.active{
  display:block ;
}
  .options-item{
    width: 100vw;
    height: 50vh;
    position: absolute;
    top: 36vh;
    left: 0;
    background-color: #fff;
    border-radius: 10px 10px 0 0 ;
    border: 1px solid red;
  }
  .op-title{
    width: 90vw;
    margin: 3vh auto 0;
  }
  .op-label{
    display: inline-block;
    height: 10vh;
    line-height: 3vh;
  }
.op-label span{
  display: inline-block;
  margin:1vh 1vw;
  border: 1px solid #ccc;
  padding:  0 2vh;
}
</style>