import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios"

const Home = ()=>import("../views/home/Home")
const Cate = ()=>import("../views/category/Category")
const Profile = ()=>import("../views/profile/Profile")
const Cart = ()=>import("../views/shoppingCart/ShoppingCart")
const Details = ()=>import("../views/details/Details")

const News = ()=>import("../views/home/home_modules/News")
const Pop = ()=>import("../views/home/home_modules/Pop")
const Sell = ()=>import("../views/home/home_modules/Sell")


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home,
    children:[
      {
        path:"",
        redirect: "/home/pop"
      },
      {
        path:"/home/pop",
        component:Pop
      },
      {
        path:"/home/sell",
        component:Sell
      },
      {
        path:"/home/news",
        component:News
      }
    ]
  },
  {
    path:"/cate",
    component:Cate
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/details",
    component:Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
