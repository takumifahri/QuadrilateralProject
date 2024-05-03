<template>
    <!-- Change page  -->
    <v-card class="mx-auto d-flex justify-center py-15  px-10 w-100 md:w-50 h-full md:h-50"
    style="background-color: #111F4D;"
    >
      <v-card class="mx-9 rounded-xl pa-16 md:pa-8 lg:w-[500px] md:w-[300px] sm:w-[200px] bg-white"
      
      >
        <h3 
        class="mt-1 font-sans lg:text-5xl  md:text-lg sm:text-base not-italic font-bold"
        style="color: #000; 
        /* font-family:  'Poppins', sans-serif; */
        /* font-size: 24px;  */
        /* font-style: normal; */
        /* font-weight: 700; */
        ">Reset</h3>

        <h1
        class="mt-3 lg:text-6xl md:text-2xl sm:text-base font-sans font-bold not-italic leading-none"
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
          New Password:
        </h1>
        <br>
        <input type="password" placeholder="Enter your new password" class="w-100 mb-2 py-2 px-4 border border-8 rounded ">

        <br>

        <h1 class="lg:text-2xl mt-2 font-sans font-bold mb-n1">
          New Password:
        </h1> 
        <br>
        <input type="password"  placeholder="Enter your new password" class="w-100 mb-2 py-2 px-4 border border-8 rounded" >

        <div class="btn flex">
          <!-- Button to regist page and login -->
          <v-btn class="text-h6 md:text-h3 sm:text-h1 px-7 mt-14 md:px-4 sm:px-2 rounded-pill" style="background-color: #30475E ; color: white;" href="/regists" width="100%">
            CHANGE PASSWORD
          </v-btn>
         
        </div>
      </v-card>
      
      <aside class="mx">
        <v-img src="@/assets/Jurnalisa.png"/>
        <v-img src="@/assets/reset.png" width="300px"
        height="500px"/>
      </aside>
      
      
    </v-card>
</template>
<script>
    export default {
        name: 'resetPassword'
    }
</script>