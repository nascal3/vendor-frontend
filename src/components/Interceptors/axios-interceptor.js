import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8181/api'
})

instance.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem('token')
    return config
  },
  error => Promise.reject(error)
)

export default instance
