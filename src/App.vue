<template>
  <v-app class="grey lighten-4">
    <TopNavBar @toggleBar="changeBarState"></TopNavBar>
    <SideNavBar :navState = navSate></SideNavBar>
    <v-content>
      <transition
        name="bounce"
        enter-active-class="bounceInLeft"
        leave-active-class="bounceOutRight"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>

import TopNavBar from '@/components/TopNavbar/TopNavbar'
import SideNavBar from '@/components/SideNavbar/SideNavbar'

export default {
  name: 'App',
  data () {
    return {
      navSate: false
    }
  },
  components: {
    SideNavBar,
    TopNavBar
  },
  methods: {
    changeBarState (value) {
      this.navSate = value
    }
  }
}
</script>
