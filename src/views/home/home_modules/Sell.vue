<template>
  <div class="news">
    <TabBarItem v-for="item in lis" path="/details" :key="item.iid" :iid="item.iid">
      <img :src="item.show.img" alt="" slot="icon">
      <div slot="txt" >
        <p>{{item.title}}</p>
        <p>{{item.orgPrice}}</p>

      </div>
    </TabBarItem>
  </div>
</template>

<script>
  import axios from "axios"
  import TabBarItem from "../../../components/common/tabbar/TabBarItem"
  export default {
    name: "Sell",
    data(){
      return{
        count:1,
        lis:[],
        src:""
      }
    },
    props:{

    },
    computed:{
      url(){
        //监听当前活跃的路由
        this.src=this.url
        return this.$route.path;
      },
      list(){

      }
    },
    created(){
      axios.get(" http://127.0.0.1:3000/home/Sell?id=1").then(value => {
        // console.log(value.data.data.list);
        this.lis = value.data.data.list
      })
    },
    methods:{

    },
    components:{
      TabBarItem
    }

  }
</script>

<style scoped>
  .news{
    background-color: #fff;
    /*margin-top: 0vh;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .news img{
    width: 45vw;
    height: 40vh;
    margin-top: 1vh;
  }
  .news p{
    width: 45vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    text-indent: 1em;
  }
</style>