<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" :mini-variant="mini" dark>
      <section>
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

          <v-list-group id="change" prepend-icon="attach_money" value="true">
            <v-list-tile class="sidebar__Item" slot="activator">
              <v-list-tile-title color="success">Sales</v-list-tile-title>
            </v-list-tile>

              <v-list-tile class="sidebar__subItem" router :to="'/home'">
                <v-list-tile-action>
                  <v-icon class="white--text">bar_chart</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="white--text">Item sales</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile class="sidebar__subItem" router :to="'/compare'">
                <v-list-tile-action>
                  <v-icon class="white--text">pie_chart</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="white--text">Compare sales</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list-group>

        </v-list>
      </section>

      <footer class="sidebarFooter" :class="{ 'sidebarFooter2':mini }">
        <div>VENDOR PORTAL SYSTEM </div>
        <div>Copyright © 2019</div>
        <div>
          <router-link to="#">
            Terms and conditions
          </router-link>
        </div>
      </footer>
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

<style lang="scss">
  @import "../../styles/main";
  #change {
    .v-list__group__header__prepend-icon.primary--text {
      color: $success !important;
    }

    .v-list__group__header__prepend-icon {
      .theme--dark.v-icon  {
        color: $success !important;
      }
    }
  }
</style>

<style lang="scss" scoped>
  @import "SideNavbar";
</style>
