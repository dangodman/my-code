import http from "@/utils/http.js";
// 模块 前后端 交流 数据封装模块
//  localhost:3000/banner  //轮播图 axios


// 轮播图
export async function getBanner() {
  // get 统一 http
  const { banners } = await http.get("/banner", { type: 1 })
  return banners
}

// 搜索的
export async function getSearchSuggest(keywords) {
  // get 统一 http
  const { result } = await http.get("/search",{ keywords })
  return result 
}
