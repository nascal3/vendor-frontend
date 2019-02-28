import axios from '@/components/Interceptors/axios-interceptor'

const state = {
  salesTransactions: localStorage.getItem('salesTrans')
}

const mutations = {
  FETCH_TRANSACTIONS (state, results) {
    localStorage.setItem('salesTrans', JSON.stringify(results.data))
    state.salesTransactions = localStorage.getItem('salesTrans')
  }

}

const actions = {
  fetchTransactions ({ commit }, dataValues) {
    axios.get('items/item/186076/1').then((res) => {
      commit('FETCH_TRANSACTIONS', res)
    }).catch(err => console.error('Error occurred!: ', err.message))
  }
}

const getters = {
  salesTrans: state => {
    return state.salesTransactions
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
