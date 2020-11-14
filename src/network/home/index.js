import {request} from "@/network/axios";
export function getHomeMultidata(banner,recommend){
  request({
    url:"/home/multidata"
  }).then(res=>{

    banner = res.data.data.banner.list

    recommend = res.data.data.recommend.list
  })
}