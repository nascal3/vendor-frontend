<template>
  <nav>
    <v-toolbar app light class="blue-grey--text text--darken-4">
      <v-toolbar-side-icon class="blue-grey--text text--darken-4" @click="toggleSidebar"></v-toolbar-side-icon>
      <!--<v-toolbar-title>Vendor Dashboard</v-toolbar-title>-->
      <v-spacer></v-spacer>
      <div class="logo">
        <img class="logo__topNav" src="@/assets/logo/tuskys_logo.jpg" alt="tuskys logo">
      </div>
      <v-spacer></v-spacer>
      <AvatorSection></AvatorSection>
    </v-toolbar>
  </nav>
</template>

<script>
import AvatorSection from '@/components/AvatorSection/AvatorSection'

export default {
  name: 'TopNavbar',
  components: {
    AvatorSection
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggleSidebar () {
      this.open = !this.open
      this.$emit('toggleBar', this.open)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "TopNavbar";
</style>
