import Vue from 'vue'
import Vuex from 'vuex'
import {alert} from "./alert.module";
import {account} from "./account.module";
import {loader} from "./loader.module";
import { products } from '@/_store/product.module'
import { cart } from '@/_store/cart.module'
import { wishList } from '@/_store/wishList.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alert,
    account,
    loader,
    products,
    cart,
    wishList
  }
})
