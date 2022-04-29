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
    },
    graphData: {
      type: Array,
      default: null
    },
    graphLabel: {
      type: String,
      default: 'Value'
    }
  },
  mounted () {
    const ctx = document.getElementById(this.chartID).getContext('2d')
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        datasets: [
          {
            label: this.graphLabel,
            data: this.graphData,
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
      }
    })
    console.log(myChart)
  }
}
</script>

<style lang="scss" scoped>

</style>
