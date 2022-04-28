<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 style="color: #fff; font-size: 3rem;" class="text-center mt-8">Dashboard</h1>
        <v-container fluid>
          <v-row v-if="detail === 0">
            <v-col cols="6">
              <div class="box" @click="detail = 1">
                <h2>Room 1</h2>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="box" @click="detail = 2">
                <h2>Room 2</h2>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="box" @click="detail = 3">
                <h2>Room 3</h2>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="box" @click="detail = 4">
                <h2>Room 4</h2>
              </div>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col cols="12">
              <div class="box">
                <h1>Capacity</h1>
                <h1>1 / 100</h1>
              </div>
              <div class="text-center mt-8">
                <v-icon color="white" large @click="detail = 0">
                  mdi-arrow-left-circle
                </v-icon>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      detail: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    background-color: #333;
    padding: 2em;
    text-align: center;
    color: #fff;

    :hover {
      cursor: pointer;
    }
  }
</style>
