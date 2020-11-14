//导入
import Vue from "vue"
import VueRouter from "vue-router"

const Detail = ()=>import("../view/detail/Detail")

//解决import报错方法
//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

//使用router
Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:()=> import("../view/home/Home"),
    },
    {
        path:"/category",
        component:()=> import("../view/category/Category")
    },
    {
        path:"/shoppingCart",
        component:()=> import("../view/shoppingCart/ShoppingCart")
    },
    {
        path:"/profile",
        component:()=> import("../view/profile/Profile")
    },
    {
        path:"/detail",
        component:Detail
    }
]


const router = new VueRouter({
    routes,
    mode:"history"
})

export default router