<template>
  <v-container>
    <v-row justify="center" align="center" style="height: 100vh">
      <v-col cols="8" sm="6" md="4">
        <v-card class="login-card">
          <v-card-title>
            {{ newUser ? 'Create account' : 'Log in' }}
          </v-card-title>

          <v-divider />

          <v-card-text v-if="!newUser">
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                required
              />

              <v-text-field
                v-model="password"
                :rules="passwordRulesExisting"
                label="Password"
                type="password"
                required
              />
            </v-form>
          </v-card-text>

          <v-card-text v-if="newUser">
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                type="text"
                required
              />

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                required
                class="input"
              />

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              />
            </v-form>
          </v-card-text>

          <v-card-actions v-if="!newUser">
            <v-btn @click="switchNewUser">
              Create account
            </v-btn>

            <v-btn>
              Reset password
            </v-btn>

            <v-btn :disabled="!valid" color="primary" @click="confirm">
              Log in
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-actions v-if="newUser">
            <v-btn @click="switchNewUser">
              <v-icon>mdi-chevron-left</v-icon>
              Existing user
            </v-btn>

            <v-btn :disabled="!valid" color="primary" @click="confirm">
              Create account
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data: () => ({
    newUser: false,
    valid: false,
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 15) || 'Username can\'t be longer than 15 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length > 5) || 'Password must be at least 6 characters long'
    ],
    passwordRulesExisting: [
      v => !!v || 'Enter your password'
    ]
  }),
  methods: {
    switchNewUser () {
      this.$refs.form.reset()
      this.newUser = !this.newUser
    },
    confirm () {
      if (this.newUser) {
        this.createAccount()
      } else {
        this.login()
      }
    },
    createAccount () {
      // console.log('bruh')
    },
    login () {
      // console.log(`logging in with credentials   -> email: ${this.email} | pass: ${this.password}`)
      axios
        .post('https://gym-api-iot.herokuapp.com/api/auth/local', {
          identifier: this.email,
          password: this.password
        })
        .then(response => console.log(response))
    }
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  margin-bottom: 60%;

  .v-card__actions {
    justify-content: space-between;
    padding: 5% 10%;
  }
}
</style>
