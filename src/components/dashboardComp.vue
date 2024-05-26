<template>
  <v-container class="pa-8 flex">
    <v-container>
      <h1 class="font-bold text-3xl font-sans">Dashboard</h1>
      
      <v-row>
        <v-col cols="6">
          <!-- Chart -->
          <VisitorBarChart :data="visitorData" />
        </v-col>

        <v-col cols="6">
          <!-- Komentar Terbaru -->
          <RecentComments :comments="recentComments" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'
import VisitorBarChart from '../components/VisitorBarChart.vue'
import RecentComments from '../components/RecentComments.vue'

export default {
  name: 'Dashboard',
  components: {
    VisitorBarChart,
    RecentComments
  },
  data() {
    return {
      visitorData: [],
      recentComments: []
    }
  },
  created() {
    this.fetchVisitorData()
    this.fetchComments()
  },
  methods: {
    fetchVisitorData() {
      axios.get('/visitorData.json').then(response => {
        this.visitorData = response.data
      }).catch(error => {
        console.error('Error fetching visitor data:', error)
      })
    },
    fetchComments() {
      axios.get('/comments.json').then(response => {
        this.recentComments = response.data
      }).catch(error => {
        console.error('Error fetching comments:', error)
      })
    }
  }
}
</script>