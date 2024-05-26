<script>
import { Bar } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  extends: Bar,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.data.map(item => item.day_of_week),
        datasets: [
          {
            label: 'Minggu Lalu',
            backgroundColor: '#f87979',
            data: this.data.map(item => item.last_week)
          },
          {
            label: 'Minggu Ini',
            backgroundColor: '#7fbf7f',
            data: this.data.map(item => item.this_week)
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>