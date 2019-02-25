<template>
  <nav>
    <v-toolbar app light class="text--darken-4">
      <v-toolbar-side-icon v-if="loggedIn" class="blue-grey--text text--darken-4" @click="toggleSidebar"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <div class="logo">
        <v-img class="logo__topNav" :src="LogoImage" alt="tuskys logo"></v-img>
      </div>
      <v-spacer></v-spacer>
      <AvatorSection v-if="loggedIn"></AvatorSection>
    </v-toolbar>
  </nav>
</template>

<script>
import AvatorSection from '@/components/AvatorSection/AvatorSection'
import { mapGetters } from 'vuex'

export default {
  name: 'TopNavbar',
  components: {
    AvatorSection
  },
  data () {
    return {
      open: false,
      LogoImage: require('@/assets/logo/tuskys_logo.jpg')
    }
  },
  methods: {
    toggleSidebar () {
      this.open = !this.open
      this.$emit('toggleBar', this.open)
    }
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "TopNavbar";
</style>
