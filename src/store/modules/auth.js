import axios from '@/components/Interceptors/axios-interceptor'

const state = {
  loggedIn: false,
  tokenID: null,
  loginError: null,
  fakeData: []
}

const mutations = {
  AUTH_USER (state, userData) {
    state.tokenID = userData
  },
  LOGIN_ERROR (state, data) {
    state.loginError = data
  },
  GET_FAKE_DATA (state, results) {
    state.fakeData = results.data
  }
}

const actions = {
  loginUser ({ commit }, userData) {
    console.log('run', userData)
    axios.post('/users/login', userData).then((res) => {
      console.log('>>X', res)
      commit('AUTH_USER', res)
    }).catch(err => {
      commit('LOGIN_ERROR', true)
      console.error('Error occurred!: ', err)
    })
  },
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
  },
  loggedIn: state => {
    return state.loggedIn
  },
  loginError: state => {
    return state.loginError
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
