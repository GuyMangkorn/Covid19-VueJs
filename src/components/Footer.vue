<template>
  <v-footer
      style="background-color: darkslateblue"
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-text class="text-center" style="background-color: darkslateblue">
        <v-btn
            v-for="icon in icons"
            :key="icon.ico"
            class="mx-4"
            dark
            icon
            onmouseenter=""
            v-bind:href="icon.link"
            target="_blank"
        >
          <v-icon size="24px">
             {{ icon.ico }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="py-2 text-center">
        Get connected with me on social networks!
        {{ new Date().getFullYear() }} — <strong>Mangkorn Ktw.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
 data () {
   return {
     icons: [
       {ico: 'mdi-facebook' , link:'https://www.facebook.com/mangkorn.katawong.31/'},
       {ico:'mdi-linkedin' , link: 'https://www.linkedin.com/in/mangkorn-katawong-94b08b192/'},
       {ico:'mdi-instagram', link: 'https://www.instagram.com/katawong0/'}
     ],
   }
 }
}
</script>

<style scoped>

</style>