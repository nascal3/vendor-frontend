import axios from 'axios'

const state = {
  loading: false,
  loggedIn: localStorage.getItem('loggedIn'),
  tokenID: null,
  userData: localStorage.getItem('userData'),
  loginError: null
}

const mutations = {
  AUTH_USER (state, userData) {
    localStorage.setItem('token', userData.token)
    state.tokenID = localStorage.getItem('token')
    localStorage.setItem('userData', JSON.stringify(userData.user))
    state.userData = localStorage.getItem('userData')
  },
  USER_LOGGEDIN (state, data) {
    localStorage.setItem('loggedIn', data)
    state.loggedIn = localStorage.getItem('loggedIn')
  },
  LOGOUT_USER (state, data) {
    state.loggedIn = false
    state.tokenID = null
    state.userData = {}

    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('userData')
    localStorage.removeItem('salesTrans')
  },
  LOGIN_ERROR (state, data) {
    state.loginError = data
  },
  SHOW_LOADER (state, data) {
    state.loading = data
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
  }
}

const getters = {
  fakeData: state => {
    return state.fakeData
  },
  loggedIn: state => {
    return state.loggedIn
  },
  userData: state => {
    return state.userData
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
