<template>
  <v-card class="gym-widget-card text-center">
    <v-card-title class="title">
      Gym {{ number }}
    </v-card-title>
    <v-card-subtitle class="subtitle">
      Door {{ doorNumber }}
    </v-card-subtitle>
    <v-divider />
    <v-card-text class="text-center occupation" :class="colorClass">
      {{ occupation }}/{{ capacity }}
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn class="info-button primary">
        Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'GymWidget',
  props: {
    number: {
      type: Number,
      default: 0
    },
    doorNumber: {
      type: String,
      default: 'XXX'
    },
    occupation: {
      type: Number,
      default: -1
    },
    capacity: {
      type: Number,
      default: -1
    }
  },
  computed: {
    colorClass () {
      if (this.occupation === 0) {
        return 'green--text'
      }
      if (this.occupation < this.capacity) {
        return 'yellow--text'
      }
      if (this.occupation === this.capacity) {
        return 'red--text'
      }
      return 'blue--text'
    }
  }
}
</script>

<style lang="scss" scoped>
.gym-widget-card {
  margin: 0 5em;
  .title {
    font-weight: 700;
  }
  .subtitle {
    font-weight: 700;
  }
  .occupation {
    font-size: 72px;
    padding: 1em 0.30em;
  }
  .info-button {
    margin: 0.5em 1.5em;
  }
}
</style>
