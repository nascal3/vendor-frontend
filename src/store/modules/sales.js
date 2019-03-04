import axios from '@/components/Interceptors/axios-interceptor'

const state = {
  salesTransactions: localStorage.getItem('salesTrans'),
  loading: false
}

const mutations = {
  FETCH_TRANSACTIONS (state, results) {
    localStorage.setItem('salesTrans', JSON.stringify(results.data))
    state.salesTransactions = localStorage.getItem('salesTrans')
  },
  DATA_LOADER (state, data) {
    state.loading = data
  }

}

const actions = {
  fetchTransactions ({ commit }, dataValues) {
    commit('DATA_LOADER', true)
    axios.get(`items/item/${dataValues.Vendor_No}/${dataValues.page}`).then((res) => {
      commit('FETCH_TRANSACTIONS', res)
      commit('DATA_LOADER', false)
    }).catch(err => {
      commit('DATA_LOADER', false)
      alert('Oops an error occurred!')
      console.error('Error occurred!: ', err.message)
    })
  }
}

const getters = {
  salesTrans: state => {
    return state.salesTransactions
  },
  loading: state => {
    return state.loading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
