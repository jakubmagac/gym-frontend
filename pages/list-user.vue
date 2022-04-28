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
export default {
  asyncData ({ $axios }) {
    const users = [
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      },
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      }
    ]
    return { users }
  },
  data () {
    return {
      headers: [
        { text: 'Email', value: 'email' },
        { text: 'Password', value: 'password' },
        { text: 'Full name', value: 'fullName' },
        { text: 'In the gym', value: 'inTheGym' }
      ]
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
