// 没有使用也会警告
import type {Banner} from '../models/banner'
import type {Personalized} from '../models/personalized'  // es6引入类型
import http from './http'
// ts有完整的编译阶段 ts-> js->
// 后端api 业务代码 广告位
export async function useBanner(){
  // 前端也有数据校验了 要说不 为用户负责 ts 接口  
  // http.get<> 泛型 返回值的类型是 Banner 数组
  // resolve()
  const { banners } = await http.get<{banners:Banner[]}>('/banner',{type:1})
  return banners
}

// 看接口文档 亮点 JSDOC 生成 后端写给前端看 前后端 分离
// api/index.ts 中加一个业务方法
// 为了大型项目,前端模型层 后端的数据就不怕不规范了 参考文档+前端请求
// pinia + model 为了让数据更安全 
export async function usePersonalized(){
  const { result } = await http.get<{result:Personalized[]}>('/personalized')
  return result
}
