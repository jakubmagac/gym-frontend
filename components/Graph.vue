<template>
  <div>
    <canvas :id="chartID" width="200" height="50" />
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  props: {
    chartID: {
      type: String,
      default: 'myChart'
    },
    config: {
      type: Object,
      default: null
    }
  },
  mounted () {
    const ctx = document.getElementById(this.chartID).getContext('2d')
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        // labels: [1,2,3,4,5]
        datasets: [
          {
            label: 'Nameraná hodnota',
            data: [200, 300, 400],
            fill: false,
            borderColor: '#1DD1A1',
            tension: 0.1
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            ticks: {
              autoSkip: true,
              maxTicksLimit: 2
            }
          }]
        }
        // Core options
        // aspectRatio: 4 / 3,
        // cutoutPercentage: 32,
        // layout: {
        //   padding: 32
        // },
        // elements: {
        //   line: {
        //     fill: false
        //   },
        //   point: {
        //     hoverRadius: 7,
        //     radius: 5
        //   }
        // }
      }
    })
    console.log(myChart)
  }
}
</script>

<style lang="scss" scoped>

</style>
