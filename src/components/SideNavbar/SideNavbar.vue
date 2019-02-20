<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" :mini-variant="mini" dark>
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon class="white--text">chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">

          <router-link to="/home">
            <div class="barIcon__circle">
              <v-list-tile-avatar>
                <svg class="barIcon__circle-icon">
                  <use xlink:href="@/assets/icons/icons-symbols.svg#icon-truck"></use>
                </svg>
              </v-list-tile-avatar>
            </div>
          </router-link>

          <v-list-tile-content>
            <v-list-tile-title class="sidebarLink">
              <router-link class="subheading text-uppercase font-weight-light white--text" to="/home">
                Vendor Portal
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon class="white--text">chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-divider class="grey darken-2"></v-divider>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'SideNavbar',
  props: {
    navState: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      drawer: false,
      mini: false,
      right: null,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/home' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'team', route: '/team' }
      ]
    }
  },
  watch: {
    navState () {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "SideNavbar";
</style>
