import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import * as action from './actions'
import sales from './modules/sales'

Vue.use(Vuex)

export default new Vuex.Store({
  action,
  modules: {
    auth,
    sales
  }
})
