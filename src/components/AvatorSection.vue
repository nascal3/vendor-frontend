<template>
  <section>
    <v-badge overlap color="primary">
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
      <v-icon>more_vert</v-icon>
    </v-btn>

      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
