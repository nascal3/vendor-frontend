import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import * as action from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  action,
  modules: {
    auth
  }
})
