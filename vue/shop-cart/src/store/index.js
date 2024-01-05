import {createStore,createLogger} from 'vuex'
import cart from './modules/cart.js'
import products from './modules/products.js'
// 单一状态树
export default createStore({
  modules:{
    cart,
    products
  },
  plugins:[createLogger()]
})