<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 style="color: #fff; font-size: 3rem;" class="text-center mt-8">Dashboard</h1>
        <v-container fluid>
          <v-col cols="12">
            <div class="box">
              <h1>Capacity</h1>
              <h1>1 / 100</h1>
            </div>
          </v-col>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Admin Dashboard',
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
