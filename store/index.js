export const state = () => ({
  gyms: [
    [
      {
        email: 'jakubmagac@gmail.com',
        password: '#@#KMDADAfsaf',
        fullName: 'Jakub Magac',
        inTheGym: false
      }
    ],
    [],
    [
      {
        email: 'samogajdos@gmail.com',
        fullName: 'Samo Gajdos',
        inTheGym: false
      },
      {
        email: 'marekkundla@gmail.com',
        fullName: 'Marek Kundla',
        inTheGym: false
      },
      {
        email: 'samogajdos@gmail.com',
        fullName: 'Samo Gajdos',
        inTheGym: false
      },
      {
        email: 'marekkundla@gmail.com',
        fullName: 'Marek Kundla',
        inTheGym: false
      }
    ],
    []
  ],
  gymData: [
    {
      occupation: [
        1, 2, 2, 0, 1, 1, 3, 4, 5, 4, 3, 3, 4
      ],
      humidity: [
        23.12, 23.46, 24.02, 23.46, 23.42, 23.85, 24.64, 25.98, 26.37, 26.68, 26.55, 26.56, 26.21
      ],
      temperature: [
        19.7, 19.7, 19.8, 20.0, 20.1, 19.8, 20.5, 20.6, 20.6, 19.6, 19.6, 19.6, 19.7
      ]
    }
  ]
})

export const mutations = {
  // increment(state) {
  //   state.counter++
  // }
}
