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
        <section class="userTitle" v-if="loggedIn && userFullname">
          <span>Welcome</span>&nbsp;
          <span class="text-lowercase">{{userFullname}}</span>
        </section>
      </transition>

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
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      navSate: false,
      userInfo: {},
      userFullname: ''
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
  },
  computed: {
    ...mapGetters({
      userData: 'userData',
      loggedIn: 'loggedIn'
    })
  },
  mounted () {
    this.userInfo = JSON.parse(this.userData)
    this.userFullname = this.userInfo.Fullname
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/main";
  .userTitle {
    color: $primary;
    margin: 3rem 2rem .5rem 2rem;
    font-size: 2.5rem;
    font-weight: 300;
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>
