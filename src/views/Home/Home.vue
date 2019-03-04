<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="home">
    <div class="home__loader">
    <v-progress-circular
        v-if="sales === null "
        :size="70"
        :width="7"
        color="info"
        indeterminate
      >
      </v-progress-circular>
    </div>

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
          <div class="home__dataTable" v-if="!showLoader">

            <v-card-title>
              <div class="home__dataTable-itemName">Item Name: {{sales.item.Description}}</div>
              <div class="home__dataTable-itemNum">Item Number: {{sales.item.No}}</div>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="salesTransct"
                :search="search"
              >
                <template v-slot:items="props">
                  <td>{{ props.item.Store_No }}</td>
                  <td>{{ props.item.Transaction_No }}</td>
                  <td>{{ props.item.Date | moment(" D MMM YYYY")}}</td>
                  <td>{{ props.item.Price | currency('') }}</td>
                  <td>{{ props.item.Net_Price | currency('') }}</td>
                  <td>{{ props.item.Cost_Amount | currency('') }}</td>
                  <td>{{ props.item.Net_Amount | currency('') }}</td>
                  <td>{{ props.item.VAT_Amount | currency('') }}</td>
                  <td>{{ props.item.Standard_Net_Price | currency('') }}</td>
                  <td>{{ props.item.Disc_Amount_From_Std_Price | currency('') }}</td>
                  <td>{{ props.item.Item_Posting_Group }}</td>
                  <td>{{ props.item.Refund_Qty }}</td>
                </template>
              </v-data-table>

            <v-btn class="home__dataTable-loadBtn" @click="loadMore(sales)" color="accent" v-if="!dataEnd">
              <span v-if="!showLoader" >Load More records...</span>
            </v-btn>
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
      search: '',
      salesTransct: [],
      dataEnd: false,
      headers: [
        { text: 'Store No', value: 'Store_No' },
        { text: 'Transaction No', value: 'Transaction_No' },
        { text: 'Date', value: 'Date' },
        { text: 'Price', value: 'Price' },
        { text: 'Net Price', value: 'Net_Price' },
        { text: 'Cost Amount', value: 'Cost_Amount' },
        { text: 'Net Amount', value: 'Net_Amount' },
        { text: 'VAT Amount', value: 'VAT_Amount' },
        { text: 'Standard Net Price', value: 'Standard_Net_Price' },
        { text: 'Disc Amount', value: 'Disc_Amount_From_Std_Price' },
        { text: 'Item Posting Group', value: 'Item_Posting_Group' },
        { text: 'Refund Qty', value: 'Refund_Qty' }
      ]
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
  watch: {
    sales (newValue, oldValue) {
      this.salesTransct.push(...newValue.transactions)
      console.log(this.salesTransct)
    }
  },
  methods: {
    loadMore (salesData) {
      if (salesData.currentPage <= salesData.pages) {
        salesData.currentPage++
        if (salesData.currentPage === 1) salesData.currentPage++

        salesData.currentPage === salesData.pages ? this.dataEnd = true : this.dataEnd = false

        if (salesData.currentPage <= salesData.pages) {
          salesData.page = salesData.currentPage

          let userData = JSON.parse(localStorage.getItem('userData'))
          salesData.Vendor_No = userData.Vendor_No
          this.$store.dispatch('fetchTransactions', salesData)
        }
      }
    }
  },
  mounted () {
    let userData = JSON.parse(localStorage.getItem('userData'))
    userData.page = 1
    this.$store.dispatch('fetchTransactions', userData)
  }
}
</script>

<style lang="scss" scoped>
  @import "Home";
</style>
