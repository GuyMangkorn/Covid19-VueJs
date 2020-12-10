<template>
  <v-main width="100%" class="fill-height bg-img" :style="`background-image: url(${require('@/assets/bg_important_blue.jpeg')})`">
      <v-app-bar
          app
          elevate-on-scroll
          hide-on-scroll
          dark
          fixed
          dense
          :style="colorStyle"
          fade-img-on-scroll>
        <template v-slot:img="{ props }">
          <v-img
              style="background-color: transparent"
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.3)"
          ></v-img>
        </template>
        <v-toolbar-items>
        <v-btn icon fab  small  depressed style="margin-left: 5px;margin-top: 5px;margin-right: 12px"><v-img style="width: 20px" :style="opacity"  src="@/assets/coronavirus.png" /></v-btn>
        </v-toolbar-items>
        <v-toolbar-title style="font-weight: initial;" class="mt-3">Covid-19</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="justify-end">
        </v-toolbar-items>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab style="font-weight: initial" @click="current=page1">
              <v-img width="20px" src="@/assets/thailand.png" style="margin-right: 10px" />
              Thailand</v-tab>
            <v-tab style="font-weight: initial" @click="current=page2">
              <v-img width="20px" src="@/assets/worldwide.png" style="margin-right: 10px" />
              World</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
     <component :is="current"></component>
    <Footer/>
  </v-main>
</template>

<script>
import Footer from "@/components/Footer.vue";
import WorldStats from "@/components/WorldStats.vue";
import TodayStats from "@/components/TodayStats.vue";
export default {
  components: {
    Footer
  },
  data () {
    return {
      windowTop: 0,
      scroll : false,
      props: '',
      prevWindow: '',
      page1: TodayStats,
      page2: WorldStats,
      current : TodayStats
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  directives : {

  },
  methods: {
    onScroll() {
      this.windowTop = window.scrollY;
      console.log(this.windowTop)
    }
  },
  computed : {
    opacity(){
      if(this.windowTop > 100){
        return{ opacity: 0.9};
      }else{
        return{ opacity: 0.66};
      }
    },
    colorStyle() {
      if(this.windowTop>100) {
        return {backgroundColor: 'darkslateblue'};
      }else {
        return  {backgroundColor: 'transparent'};
      }
    }
  }
}
</script>

<style scoped>
.bg-img{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>