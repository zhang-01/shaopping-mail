<template>
    <div class="rab-bar-item" @click="itemClick" :style="{color:changeColor}">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            clo:String,
            default:"red"
        },
        computed:{
          isActive(){

              // return this.$route.path.indexOf(this.path) !== -1 ? true :false
              return this.$route.path.indexOf(this.path) !== -1
          },
            changeColor(){
              return this.isActive ? this.clo :""
            }
        },
        methods:{
            itemClick(){
                // console.log(this.$router);
                this.$router.replace(this.path)
            }
        }
    }
</script>


<style scoped>
  .rab-bar-item{
    flex: 1;
  }
  .rab-bar-item *{
    font-size: 18px;
  }
  .active{
    color: red;
  }
</style>