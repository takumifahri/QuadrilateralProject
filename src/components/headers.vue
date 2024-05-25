<template>
    <v-toolbar
      class="px-10 py-3"
      style="background-color: #111F4D; color: white;"
      comfortable>
        <nav class="space-between py-4">
          <!-- Logo Jurnalisa -->
          <!-- <a href="#home" class="text-decoration-none text-white font-weight-bold text-h4">LOGO</a> -->
          <img src="/src/assets/Jurnalisa.png" width="200px" alt="">
        </nav>

        <v-spacer></v-spacer>
        <nav class="w-25 mx-5">
          <!-- Search Bar -->
          <v-text-field
          single-line
          hide-details
          append-icon="mdi-magnify"
          placeholder="cari tokoh, topik, atau peristiwa"
          ></v-text-field>
        </nav>
        <!-- Login form -->
        <nav>
          <v-btn class="text-h5" href="/lobbiess" ><v-icon>mdi-account</v-icon></v-btn>
        </nav>
    </v-toolbar>
    <v-divider :thickness="1" class="bg-black"></v-divider>


      <!-- nav di bawahnya  -->
    <v-toolbar 
    class="px-16 py-1"
    style="background-color: #111F4D; color: white;">
        <v-container class="d-flex justify-center" fluid>
          <v-btn class="text-h6 px-16">HOME</v-btn>
          <v-btn class="text-h6 px-16">NEWS</v-btn>
          <v-btn class="text-h6 px-16">KEGIATAN</v-btn>
          <!-- <v-btn class="text-h6 px-16">FORUM DISKUSI</v-btn> -->
          <v-btn class="text-h6 px-16">RADIO</v-btn>
          <v-btn class="text-h6 px-16">ABOUT US</v-btn>
        </v-container>
    </v-toolbar>
</template>

<script>
    export default {
        name : 'headers'
    }
</script>