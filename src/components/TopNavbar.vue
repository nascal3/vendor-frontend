<template>
  <nav>
    <v-toolbar app light>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <AvatorSection></AvatorSection>
    </v-toolbar>
  </nav>
</template>

<script>
import AvatorSection from '@/components/AvatorSection'

export default {
  name: 'TopNavbar',
  components: {
    AvatorSection
  }
}
</script>

<style scoped>

</style>
