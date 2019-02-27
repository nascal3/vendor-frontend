<template>
  <div class="home">
    <section class="row">
      <v-card class="home__itemsCard">
        {{sampleData.item}}
      </v-card>
      <v-card class="home__itemsCard">
        {{sampleData.pages}}
      </v-card>
      <v-card class="home__itemsCard">

      </v-card>
    </section>

    <section class="row">
      <v-card class="home__itemsTableCard">
        {{sampleData.transactions}}
      </v-card>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      sampleData: 'fakeData'
    }),
    ...mapActions({
      getData: 'getFakeData'
    })
  },
  mounted () {
    // this.getData()
    this.$store.dispatch('getFakeData')
  }
}
</script>

<style lang="scss" scoped>
  @import "Home";
</style>
