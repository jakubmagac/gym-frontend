<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" style="color: #fff;">
          User List
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="10"
          class="elevation-1"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <h1 class="text-center" style="color: #fff;">
          Temperature
        </h1>
        <div style="background-color: #fff">
          <graph
            :chartID="'graf'"
            :graph-data="[23.12, 23.46, 24.02, 23.46, 23.42, 23.85, 24.64, 25.98, 26.37, 26.68, 26.55, 26.56, 26.21]"
            :graph-label="'Temperature'"
          />
        </div>
      </v-col>
      <v-col cols="4">
        <h1 class="text-center" style="color: #fff;">
          Humidity
        </h1>
        <div style="background-color: #fff">
          <graph
            :chartID="'graf-hum'"
            :graph-data="[23.12, 23.46, 24.02, 23.46, 23.42, 23.85, 24.64, 25.98, 26.37, 26.68, 26.55, 26.56, 26.21]"
            :graph-label="'Humidity'"
          />
        </div>
      </v-col>
      <v-col cols="4">
        <h1 class="text-center" style="color: #fff;">
          Occupation
        </h1>
        <div style="background-color: #fff">
          <graph
            :chartID="'graf-occ'"
            :graph-data="[1, 2, 2, 0, 1, 1, 3, 4, 5, 4, 3, 3, 4]"
            :graph-label="'Occupation'"
          />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="text-center mt-8">
        <NuxtLink to="/">
          <v-icon color="white" large>
            mdi-arrow-left-circle
          </v-icon>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Graph from '~/components/Graph.vue'
export default {
  components: { Graph },
  asyncData ({ $axios, isDev, route, store, env, params, query, req, res, redirect, error}) {
    // const options = {
    //   method: 'GET',
    //   url: 'https://YOUR_DOMAIN/api/v2/users/USER_ID/roles',
    //   headers: { authorization: 'Bearer MGMT_API_ACCESS_TOKEN' }
    // }

    // $axios.request(options).then(function (response) {
    //   console.log(response.data)
    // }).catch(function (error) {
    //   console.error(error)
    // })
  },
  data () {
    return {
      headers: [
        { text: 'Email', value: 'email' },
        { text: 'Full name', value: 'fullName' },
        { text: 'In the gym', value: 'inTheGym' }
      ]
    }
  },
  computed: {
    users () {
      return this.$store.state.gyms[this.$route.params.id - 1]
    },
    graphData () {
      return this.$store.state.gymData
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
