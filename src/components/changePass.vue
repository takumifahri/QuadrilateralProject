<template>
    <!-- Reset page  -->
    <v-card class="mx-auto d-flex justify-center py-15  px-10 w-100 md:w-50 h-full md:h-50"
    style="background-color: #111F4D;"
    >
      <v-card class="mx-9 rounded-xl pa-16 md:pa-8 lg:w-[500px] md:w-[300px] sm:w-[200px] bg-white"
      
      >
        <h3 
        class="mt-4 font-sans lg:text-5xl  md:text-lg sm:text-base not-italic font-bold"
        style="color: #000; 
        /* font-family:  'Poppins', sans-serif; */
        /* font-size: 24px;  */
        /* font-style: normal; */
        /* font-weight: 700; */
        ">Forgot</h3>

        <h1
        class="mt-6 lg:text-6xl md:text-2xl sm:text-base font-sans font-bold not-italic leading-none"
        style="color: #000; 
        /* font-family: 'Poppins', sans-serif;  = font-sans*/
        /* font-size: 70px;  = text-5xl*/
        /* font-style: normal; = not-italic */
        /* font-weight: 700; = font-bold */
        /* line-height: normal; = leading-none */
        ">
          PASSWORD?
        </h1>

        <h1 class="lg:text-2xl mt-10 font-sans font-bold mb-n1">
          Email or Username :
        </h1>
        <br>
        <input type="text" placeholder="Enter your email or username" class="w-100 mb-10 py-2 px-4 border border-8 rounded ">

        <div class="btn flex">
          <!-- Button to regist page and login -->
          <v-btn class="text-h6 md:text-h3 sm:text-h1 px-7 mt-14 md:px-4 sm:px-2 rounded-pill" style="background-color: #30475E ; color: white;" href="/resetPassword" width="100%">
            RESET PASSWORD
          </v-btn>
         
        </div>
      </v-card>
      
      <aside class="mx">
        <v-img src="@/assets/Jurnalisa.png"/>
        <v-img src="@/assets/Forgot.png" width="300px"
        height="500px"/>
      </aside>
      
      
    </v-card>
</template>

<script>
    export default {
        name: 'changePassword'
    }
</script>