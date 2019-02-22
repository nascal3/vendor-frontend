<template>
  <div class="home">
    <section class="row">
      <v-card class="home__itemsCard">
        <v-sheet
          color="accent"
          elevation="6"
          max-width="100%"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

      </v-card>
      <v-card class="home__itemsCard">
        <v-sheet
          color="accent"
          elevation="6"
          max-width="100%"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

      </v-card>
      <v-card class="home__itemsCard">
        <v-sheet
          color="accent"
          elevation="6"
          max-width="100%"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

      </v-card>
    </section>

    <section class="row">
      <v-card class="home__itemsTableCard">

      </v-card>
    </section>
  </div>
</template>

<script>

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
  }
}
</script>

<style lang="scss" scoped>
  @import "Home";
</style>
