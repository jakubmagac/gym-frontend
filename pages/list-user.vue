<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Zoznam Userov</h1>
      </v-col>
    </v-row>
    {{ data }}
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          class="elevation-1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const token = await $axios
      .post('https://gym-api-iot.herokuapp.com/api/auth/local', {
        identifier: 'jakubmagacp@gmail.com',
        password: '@*Fender28'
      })
      .then((response) => {
        // console.log('User profile', response.data.user)
        // console.log('User token', response.data.jwt)
        return response.data.jwt
      })
      .catch((error) => {
        console.log('An error occurred:', error.response)
      })

    const data = await $axios.$get('https://gym-api-iot.herokuapp.com/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return { data }
  },
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      users: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
