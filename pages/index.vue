<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8" class="text-center">
      <v-row justify="center" align="center" class="mt-6">
        <v-col>
          <GymWidget :number="1" :door-number="'012'" :occupation="gyms[0].length" :capacity="5" />
        </v-col>
        <v-col>
          <GymWidget :number="2" :door-number="'013'" :occupation="gyms[1].length" :capacity="4" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <GymWidget :number="3" :door-number="'014'" :occupation="gyms[2].length" :capacity="4" />
        </v-col>
        <v-col>
          <GymWidget :number="4" :door-number="'015'" :occupation="gyms[3].length" :capacity="4" />
        </v-col>
      </v-row>

      <v-btn style="margin-top: 3em" color="error" @click="logout">
        Logout
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      detail: 0
    }
  },
  computed: {
    gyms () {
      return this.$store.state.gyms
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
