<template>


    <div class="tab-bar-item" @click="itemClick" :style="{color:changeColor}">
<!--      <div class="fa fa-home item-icon"></div>-->
<!--      <div>首页</div>-->
      <slot name="icon"></slot>
      <slot name="txt"></slot>
    </div>

<!--    <div class="tab-bar-item">-->
<!--      <div class="fa fa-th-large item-icon"></div>-->
<!--      <div>分类</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <div class="fa fa-shopping-cart item-icon"></div>-->
<!--      <div>购物车</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <div class="fa fa-user item-icon"></div>-->
<!--      <div>我的</div>-->
<!--    </div>-->

</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      col:{
        type:String,
        default:"red"
      },
      iid:String
    },
    methods:{
      itemClick(){
        // console.log(this.url);
        // if(this.url){
        //   console.log(this.$router.replace);
        // }
        // console.log(this.iid);
        this.$router.replace({path:this.path,query:{id:this.iid}})

      }
    },
     computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !== -1
          },
       changeColor(){
            return this.isActive ?this.col :""
       }
 }

  }
</script>

<style scoped>
  .tab-bar-item{
    margin-top: 5px;
    flex: 1;
    text-align: center;
  }
.active{
  color: red;
}

</style>