<template>
    <!-- formTo page  -->
    <v-card class="mx-auto d-flex justify-center py-15  px-10 w-100 md:w-50 h-full md:h-50"
    style="background-color: #111F4D;"
    >
      <v-card class="mx-9 rounded-xl pa-16 md:pa-8 md:w-25   bg-white"
      width="500px">
        <h3 
        class="mt-4 font-sans text-2xl  md:text-lg sm:text-base not-italic font-bold"
        style="color: #30475E; 
        /* font-family:  'Poppins', sans-serif; */
        /* font-size: 24px;  */
        /* font-style: normal; */
        /* font-weight: 700; */
        ">Hello, Friend!</h3>

        <h1
        class="mt-6 text-5xl md:text-2xl sm:text-base font-sans font-bold not-italic leading-none"
        style="color: #000; 
        /* font-family: 'Poppins', sans-serif;  = font-sans*/
        /* font-size: 70px;  = text-5xl*/
        /* font-style: normal; = not-italic */
        /* font-weight: 700; = font-bold */
        /* line-height: normal; = leading-none */
        ">
          Connect now, stay informed
        </h1>

        <p
        class="mt-8 mb-16 text-lg md:text-base sm:text-sm font-sans font-normal not-italic leading-none"
        style="color: #000;
        /* font-family: 'Poppins', sans-serif; */
        /* font-size: 18px; = text-lg*/
        /* font-style: normal; */
        /* font-weight: 400; = font-normal */
        /* line-height: normal; */
        ">
          Join our news journey and keep up with the latest developments at SMAN 51 Jakarta
        </p>

        <div class="btn flex">
          <!-- Button to regist page and login -->
          <v-btn class="text-h6 md:text-h3 sm:text-h1 px-7 md:px-4 sm:px-2 mx-6 md:mx-3 sm:mx-1   rounded-pill" style="background-color: #30475E ; color: white;" href="/regists">
            REGISTER
          </v-btn>
          <v-btn class="text-h6 md:text-h3 sm:text-h1 px-10 md:px-7 sm:px-4  rounded-pill" href="/login">
            LOGIN
          </v-btn>
        </div>
      </v-card>
      
      <aside class="mx">
        <v-img src="@/assets/Jurnalisa.png"/>
        <v-img src="@/assets/formTo.png" width="300px"
        height="500px"/>
      </aside>
      
      
    </v-card>
</template>

<script>
    export default {
        name: 'lobbiess'
    }
</script>