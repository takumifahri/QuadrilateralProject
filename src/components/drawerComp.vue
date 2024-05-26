<template>
    
      <v-layout style="height: 100vh">
        <v-navigation-drawer
          expand-on-hover
          rail
          style="background-color: #111F4D;"
        >
          <v-list>
            <v-list-item>
              <img src="/src/assets/Jurnalisa.png" alt="">
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Home" value="Home" class="text-white" ></v-list-item>
            <v-list-item prepend-icon="mdi-pin" title="Post" value="Post" class="text-white" ></v-list-item>
            <v-list-item prepend-icon="mdi-camera-enhance" title="Media" value="Media" class="text-white"></v-list-item>
            <v-list-item prepend-icon="mdi-folder-multiple" title="Draft" value="Draft" class="text-white"></v-list-item>
            <v-list-item prepend-icon="mdi-comment" title="Comment" value="Comment" class="text-white"></v-list-item>
            <v-list-item prepend-icon="mdi-information-outline" title="Error" value="Error" class="text-red"  ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        
        <!-- <v-main style="height: 100vh">Hello</v-main> -->
      </v-layout>

</template>

<script>
    export default {
        name: 'drawerComp'
    }
</script>