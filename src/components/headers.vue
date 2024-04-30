<template>
    <v-toolbar
      class="px-10 py-3  bg-indigo-darken-4 "
      comfortable>
        <nav class="space-between py-4">
          <!-- Logo Jurnalisa -->
          <!-- <a href="#home" class="text-decoration-none text-white font-weight-bold text-h4">LOGO</a> -->
          <img src="/src/assets/Jurnalisa.png" width="200px" alt="">
        </nav>

        <v-spacer></v-spacer>
        <nav class="w-25">
          <!-- Search Bar -->
          <v-text-field
          single-line
          hide-details
          append-icon="mdi-magnify"></v-text-field>
        </nav>
        <!-- Login form -->
        <nav>
          <v-btn class="text-h5" href="/login" append-icon="mdi-account"></v-btn>
        </nav>
    </v-toolbar>
    <v-divider :thickness="1" class="bg-black"></v-divider>


      <!-- nav di bawahnya  -->
    <v-toolbar class="px-10 py-1 bg-indigo-darken-4">
        <div class="justify-center d-flex">
          <v-btn class="text-h6 px-10">HOME</v-btn>
          <v-btn class="text-h6 px-10">NEWS</v-btn>
          <v-btn class="text-h6 px-10">KEGIATAN</v-btn>
          <v-btn class="text-h6 px-10">FORUM DISKUSI</v-btn>
          <v-btn class="text-h6 px-10">RADIO</v-btn>
          <v-btn class="text-h6 px-10">ABOUT US</v-btn>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name : 'headers'
    }
</script>