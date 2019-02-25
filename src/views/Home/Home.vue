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
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm'
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240
      ]
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
