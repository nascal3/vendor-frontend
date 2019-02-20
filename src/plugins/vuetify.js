import Vuetify from 'vuetify/lib'
import Vue from 'vue'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#2D3E4E',
    success: '#15C4A9',
    info: '#FDC300',
    accent: '#A88BDF',
    error: '#F4655D'
  }
})
