<template>
    <v-main>
        <!-- login page  -->
        <v-card class="mx-auto d-flex justify-center py-15  px-10"
        style="background-color: #111F4D;"
        width="100%" 
        height="100%"
        >
            <v-sheet class="mx-10 px-10 py-16 rounded-xl" width="500px">
                <v-form @submit.prevent>
                <v-text-field
                    v-model="firstName"
                    :rules="rules"
                    label="First name"
                    placeholder="enter your first name"
                    class="mt-6"
                    variant="solo"
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="rules"
                    label="Email"
                    placeholder="enter your email"
                    variant="solo"
                ></v-text-field>

                <a href="/changePassword" class="my-5  ">Forgot your password?</a>
                <v-btn class="mt-2" type="submit" block style="background-color: #30475E; color: white;">Submit</v-btn>
                <a href="/regists">Don't have account</a>
                
                <p align="center" class="my-10">
                    OR
                </p>

                <v-btn class="mt-1" type="submit" prepend-icon="mdi-google" width="100%" style="background-color: #D9D9D9; color: black;">
                    Login with Google 
                </v-btn>
                </v-form>

            </v-sheet>
            <aside class="mx-5">
                <v-img src="@/assets/Jurnalisa.png"/>
                <v-img src="@/assets/Logo-Login.png" width="300px"
                height="500px"/>
            </aside>
        </v-card>
    </v-main>
</template>

<script>
    export default {
        name: 'logins'
    }
</script>