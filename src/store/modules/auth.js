import axios from '@/components/Interceptors/axios-interceptor'

const state = {
  loading: false,
  loggedIn: localStorage.getItem('loggedIn'),
  tokenID: null,
  loginError: null,
  fakeData: []
}

const mutations = {
  AUTH_USER (state, userData) {
    state.tokenID = localStorage.setItem('token', userData.token)
  },
  USER_LOGGEDIN (state, data) {
    localStorage.setItem('loggedIn', data)
    state.loggedIn = localStorage.getItem('loggedIn')
  },
  LOGOUT_USER (state, data) {
    state.loggedIn = false
    state.tokenID = null
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
  },
  LOGIN_ERROR (state, data) {
    state.loginError = data
  },
  SHOW_LOADER (state, data) {
    state.loading = data
  },
  GET_FAKE_DATA (state, results) {
    state.fakeData = results.data
  }
}

const actions = {
  loginUser ({ commit }, userData) {
    commit('SHOW_LOADER', true)
    axios.post('/users/login', userData).then((res) => {
      commit('AUTH_USER', res.data)

      commit('USER_LOGGEDIN', true)
      commit('SHOW_LOADER', false)
    }).catch(err => {
      commit('SHOW_LOADER', false)
      commit('LOGIN_ERROR', true)
      console.error('Error occurred!: ', err)
    })
  },
  logoutUser ({ commit }) {
    commit('LOGOUT_USER')
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
  },
  showLoader: state => {
    return state.loading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
