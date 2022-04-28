<template>
  <v-row justify="center" align="center" style="height: 100vh">
    <v-col cols="8" sm="6" md="4" align="center">
      <v-btn color="primary" @click="auth0login">
        Log in
        <v-icon>mdi-arm-flex</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  auth: 'guest',
  methods: {
    auth0login () {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>

<style scoped>

</style>
