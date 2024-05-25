<template>
  <v-container class="pa-8 flex" >
    <v-container>
      <h1 class="font-bold text-3xl font-sans">Dashboard</h1>
      
      <!-- Chart -->
      <v-card class="w-1/2 h-1/2 mt-4">
        
        <BarChart :chart-data="datacollection" :options="options" />
        
      </v-card>

      <v-card class="w-[400px] h-1/2 mt-16">
        <v-toolbar>
          <nav class="space-between py-4 px-10  ">
          <!-- Logo Jurnalis  a -->
          <!-- <a href="#home" class="text-decoration-none text-white font-weight-bold text-h4">LOGO</a> -->
            <h1>News</h1>
          </nav>

          <v-spacer></v-spacer>
          <nav class="w-50 h-5 mx-5 py-n6">
            <!-- Search Bar -->
            <v-text-field
            single-line
            hide-details
            append-icon="mdi-magnify"></v-text-field>
          </nav>
          <!-- dropdown  form -->
          <nav>
              
          </nav>
        
        </v-toolbar>

        <v-divider color="info" :thickness="5" class="border-opacity-100" >

        </v-divider>
        <v-toolbar>

        </v-toolbar>
      </v-card>
      
    </v-container>

    <v-container>
      Hello
    </v-container>
  </v-container>
</template>

<script>
  import { Bar } from 'vue-chartjs'
  export default {
    name: 'dashboardComp',
    components: {
      BarChart: {
        extends: Bar,
        props: ['chartData', 'options'],
        mounted () {
          this.renderChart(this.chartData, this.options)
        }
      }
    },
    data () {
      return {
        datacollection: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  }
  
</script>
