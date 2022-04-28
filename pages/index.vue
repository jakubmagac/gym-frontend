<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <h1>Dashboard</h1>

      <v-row justify="center" align="center">
        <v-col>
          <GymWidget :number="1" :door-number="'012'" :occupation="2" :capacity="5" />
        </v-col>
        <v-col>
          <GymWidget :number="2" :door-number="'013'" :occupation="0" :capacity="4" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <GymWidget :number="3" :door-number="'014'" :occupation="4" :capacity="4" />
        </v-col>
        <v-col>
          <GymWidget :number="4" :door-number="'015'" :occupation="3" :capacity="6" />
        </v-col>
      </v-row>

      <v-btn style="margin-top: 3em" @click="logout">
        Logout
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #000;
  margin-bottom: 2em;
}
</style>
