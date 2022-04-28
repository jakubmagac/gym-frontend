<template>
  <v-app dark class="cover pa-0 ma-0">
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  background-image: url("~assets/background.jpeg");
}
</style>
