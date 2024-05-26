<template>
  <v-card class="pa-4">
    <h2>recent Comments</h2>
    <v-divider class="my-4"></v-divider>
    <v-list>
      <v-list-item v-for="comment in comments" :key="comment.timestamp.value">
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold" style="color: #30475E;">
            {{ comment.username }} <span style="color: black;">on</span> "{{ comment.news_title }}""
          </v-list-item-title>
          <v-list-item-subtitle>{{ formatDate(comment.timestamp) }}</v-list-item-subtitle>
          <v-list-item-text>{{ comment.comment }}</v-list-item-text>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const timestamp = new Date(parseInt(date.value.replace('/Date(', '').replace(')/', ''), 10));
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      return timestamp.toLocaleDateString(undefined, options);
    }
  }
}
</script>

<style scoped>
.v-list-item-content {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 8px;
  padding-bottom: 8px;
}
</style>