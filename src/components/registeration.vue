<template>
    <!-- regist page  -->
    <v-card class="mx-auto d-flex justify-center py-15  px-10"
    width="100%" 
    height="100%"
    style="background-color: #111F4D;"
    >
      
      <v-sheet class="mx-10 px-10 py-16 rounded-xl" width="500px">
        <v-form @submit.prevent>
          <h3 align="center">REGISTER</h3> 
          <hr class="mb-4">
          <v-row >
            <!-- gender confirmation -->
            <v-radio-group inline class= "py-1">
              <v-radio label="Laki-laki" value="one" class="px-14"></v-radio>
              <v-radio label="Perempuan" value="two" class="px-6"></v-radio>
            </v-radio-group>
          </v-row>
          <hr class="mt-n5 mb-4">

          <!-- email -->
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            label="Email"
            placeholder="enter your email"
            variant="solo"
            clearable
            rounded="rounded-pill"
          ></v-text-field>
          
          <!-- username -->
          <v-text-field
            v-model="username"
            :readonly="loading"
            :rules="[required]"
            label="Username"
            placeholder="enter your first name"
            variant="solo"
            clearable
          ></v-text-field>

          <!-- password -->
          <v-text-field
            v-model="password"
            label="Password"
            :readonly="loading"
            :rules ="passwordRules"
            placeholder="enter your password"
            variant="solo"
            clearable
            required
          ></v-text-field>

          <!-- Confirmation password -->
          <v-text-field
            v-model="password"
            label="Confirm Password"
            :readonly="loading"
            :rules ="passwordRules"
            placeholder="confirm password"
            variant="solo"
            clearable
            required
          ></v-text-field>

          <!-- submit button -->
          <v-btn class="mt-2" type="submit" block style="background-color: #30475E; color: white;">Regist</v-btn>

          
          <p align="center" class="my-10">
            OR
          </p>

          <v-btn class="mt-1" type="submit" prepend-icon="mdi-google" width="100%" style="background-color: #D9D9D9; color: black;">
            Login with Google 
          </v-btn>
        </v-form>

      </v-sheet>
      
      <aside class="mx">
        <v-img src="@/assets/Jurnalisa.png"/>
        <v-img src="@/assets/logo-register.png" width="500px"
        height="500px"/>
      </aside>
      
      
    </v-card>
</template>

<script>
    export default {
        name:'regists'
    }
</script>