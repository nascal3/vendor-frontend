<template>
  <section class="avatorMenu">
    <v-badge overlap color="info">
      <span slot="badge">3</span>

      <v-avatar size="38px">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="User avatar"
        >
      </v-avatar>
    </v-badge>

    <v-menu transition="slide-y-transition" bottom left>
      <v-btn icon slot="activator">
      <v-icon class="blue-grey--text text--darken-4">more_vert</v-icon>
    </v-btn>

      <v-list>
        <v-list-tile router :to="'/settings'" >
          <v-list-tile-content>
            <v-list-tile-title class="blue-grey--text text--darken-4">Settings</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon class="blue-grey--text text--darken-4">settings</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="logout" >
          <v-list-tile-content>
            <v-list-tile-title class="blue-grey--text text--darken-4">Sign Out</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon class="blue-grey--text text--darken-4">exit_to_app</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-menu>
  </section>
</template>

<script>
export default {
  name: 'AvatorSection',
  data () {
    return {
      links: [
        { icon: 'settings', text: 'Settings', route: '/settings' },
        { icon: 'exit_to_app', text: 'Sign Out', route: '/' }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "AvatorSection";
</style>
