<template>
  <div class="home">
    <section class="row">
      <v-card class="home__itemsCard">
        {{salesTrans.item}}
      </v-card>
      <v-card class="home__itemsCard">
        {{salesTrans.pages}}
      </v-card>
      <v-card class="home__itemsCard">

      </v-card>
    </section>

    <section class="row">
      <v-card class="home__itemsTableCard">
        {{salesTrans.transactions}}
      </v-card>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    salesTrans () {
      return JSON.parse(this.$store.getters.salesTrans)
    }
  },
  mounted () {
    this.$store.dispatch('fetchTransactions')
  }
}
</script>

<style lang="scss" scoped>
  @import "Home";
</style>
