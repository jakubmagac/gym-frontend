<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" style="color: #fff;">Zoznam Userov</h1>
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
        <h1 class="text-center" style="color: #fff;">Teplota</h1>
        <div style="background-color: #fff">
          <graph :chartID="'graf'"/>
        </div>
      </v-col>
      <v-col cols="4">
        <h1 class="text-center" style="color: #fff;">Vlhkosť</h1>
        <div style="background-color: #fff">
          <graph :chartID="'graf-hum'"/>
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
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
