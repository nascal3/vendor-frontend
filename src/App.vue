<template>
  <v-app>
    <TopNavBar @toggleBar="changeBarState"></TopNavBar>
    <SideNavBar :navState = navSate></SideNavBar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import TopNavBar from '@/components/TopNavbar'
import SideNavBar from '@/components/SideNavbar'

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
      console.log('>>>', value)
      this.navSate = value
    }
  }
}
</script>
