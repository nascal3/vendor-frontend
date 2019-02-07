<template>
  <v-app>
    <TopNavBar></TopNavBar>
    <SideNavBar></SideNavBar>
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
      //
    }
  },
  components: {
    SideNavBar,
    TopNavBar
  }
}
</script>
