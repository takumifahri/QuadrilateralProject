<template>
    <v-navigation-drawer app class="drawer" dark color="primary">
      <!-- Content di dalam drawer -->
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item link to="/posts">
          <v-list-item-icon>
            <v-icon>mdi-post</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Posts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item link to="/team">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profil Team</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item link to="/comments">
          <v-list-item-icon>
            <v-icon>mdi-comment</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Comments</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: 'headerAdmin'
  };
  </script>
  
  <style scoped>
  .drawer {
    width: 250px; /* Lebar drawer */
  }
  </style>