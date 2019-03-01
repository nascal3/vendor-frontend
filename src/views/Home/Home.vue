<template>
  <div class="home">
    <v-progress-circular
        v-if="sales === null "
        :size="70"
        :width="7"
        color="info"
        indeterminate
      >
    </v-progress-circular>

    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
      mode="out-in"
    >
      <div v-if="sales">
        <section class="row">
        <v-card class="home__itemsCard">
          <v-progress-circular
            v-if="!sales"
            :size="70"
            :width="7"
            color="accent"
            indeterminate
          ></v-progress-circular>
          <div v-if="sales">
            {{sales.item}}
          </div>
        </v-card>
        <v-card class="home__itemsCard">
          {{sales.pages}}
        </v-card>
        <v-card class="home__itemsCard">

        </v-card>
      </section>
        <section class="row">
        <v-card class="home__itemsTableCard">
          <v-progress-circular
            v-if="showLoader"
            :size="70"
            :width="7"
            color="info"
            indeterminate
          >
          </v-progress-circular>
          <div v-if="!showLoader">
            <div v-if="sales.transactions.length > 0">
              {{sales.transactions}}
            </div>
            <div v-else>
              no transactions found
            </div>
          </div>

        </v-card>
      </section>
       </div>
    </transition>

  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    sales () {
      return JSON.parse(this.$store.getters.salesTrans)
    },
    showLoader () {
      return this.$store.getters.loading
    }
  },
  mounted () {
    let userData = JSON.parse(localStorage.getItem('userData'))
    userData.page = 2
    this.$store.dispatch('fetchTransactions', userData)
  }
}
</script>

<style lang="scss" scoped>
  @import "Home";
</style>
