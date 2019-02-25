import axios from '@/components/Interceptors/axios-interceptor'

const state = {
  loggedIn: false,
  tokenID: null,
  fakeData: []
}

const mutations = {
  AUTH_USER (state, userData) {
    state.tokenID = userData
  },
  GET_FAKE_DATA (state, results) {
    state.fakeData = results.data
  }
}

const actions = {
  getFakeData ({ commit, state }) {
    if (state.fakeData.length === 0) {
      axios.get('items/item/186076/1').then((res) => {
        commit('GET_FAKE_DATA', res)
      }).catch(err => console.error('Error occurred!: ', err.message))
    }
  }

}

const getters = {
  fakeData: state => {
    return state.fakeData
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
