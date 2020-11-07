<template>
  <div id="app" :class="{hidden:isHidden?true:false}">
    <router-view></router-view>
    <MainTab></MainTab>

  </div>
</template>
<script>
import MainTab from "./components/concent/MainTab"
  export default {
    name: 'App',
    computed:{
      isHidden(){
        return this.$route.path.indexOf("details") !== -1
      }

    },
    components: {
    MainTab
    }
  }
</script>

<style>
@import "./assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
@import "./assets/css/base.css";
.item-icon{
  font-size: 26px;
}
.hidden #tab-bar{
  display: none;
}
</style>
