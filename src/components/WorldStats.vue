<template>
  <v-container class="fill-height" fluid>
    <v-row class="mx-auto fill-height" justify="center" align="center">
      <v-col class="hidden-md-and-down">
        <v-img style="width: 100%;" src="@/assets/earth-globe.png" :style="`transform: rotate(${rotation}deg);`" />
      </v-col>
      <v-col class="fill-height">
        <v-row justify="start" align="center" class="fill-height">
          <v-col>
        <v-row>
          <v-col>
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                    style="height: 150px"
                    class="transition-swing cardRight"
                    :class="`elevation-${hover ? 12 : 4}`"
                >
                  <v-card-text class="titleCard" style="color: white">Total Cases</v-card-text>
                  <v-card-text class="text-center" style="color:white;"><h1>{{ totalCases }} cases</h1></v-card-text>

                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                    style="height: 150px;"
                    class="transition-swing cardRight"
                    :class="`elevation-${hover ? 12 : 4}`"
                >
                  <v-card-text class="titleCard" style="color: white">Today Cases</v-card-text>
                  <v-card-text class="text-center" style="color:white;"><h1>{{ todayCase }} cases</h1></v-card-text>

                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                    style="height: 150px;background-color: lightgreen;border-left: 6px solid darkolivegreen"
                    class="transition-swing cardRight"
                    :class="`elevation-${hover ? 12 : 4}`"
                >
                  <v-card-text class="titleCard" style="color: black">Total Recovered</v-card-text>
                  <v-card-text class="text-center" style="color:black;"><h1>{{ totalRecovered }} cases</h1></v-card-text>

                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                    style="height: 150px;background-color: dimgrey;border-left: 6px solid black"
                    class="transition-swing cardRight"
                    :class="`elevation-${hover ? 12 : 4}`"
                >
                  <v-card-text class="titleCard" style="color: white">Total deaths</v-card-text>
                  <v-card-text class="text-center" style="color:white;"><h1>{{ totalDeaths }} deaths</h1></v-card-text>

                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rotation: 0
    }
  },
  methods: {
    rotateMethod(){
      this.rotation = this.rotation + 0.2
    }
  },
  computed: {
    totalCases() {
      return this.$store.getters.worldTotalCases
    },
    totalRecovered() {
      return this.$store.getters.worldTotalRecovered
    },
    todayCase() {
      return this.$store.getters.worldTodayCases
    },
    totalDeaths() {
      return this.$store.getters.worldTotalDeaths
    }
  },
  created() {
    setInterval(this.rotateMethod,100)
  }
}
</script>

<style scoped>
.cardLeft {
  background-color: steelblue;
  border-right: 6px solid darkblue;
  border-radius: 20px;
}
.cardRight {
  background-color: steelblue;
  border-left: 6px solid darkblue;
  border-radius: 20px;
}
.titleCard{
  font-size: 20px;
  color: white;
  opacity: .7;
  font-weight: bolder;
}
</style>