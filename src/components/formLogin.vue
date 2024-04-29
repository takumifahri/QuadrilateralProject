<template>
    <v-main>
        <!-- login page  -->
        <v-card class="bg-indigo-darken-4 mx-auto d-flex justify-center py-15  px-10"
        width="100%" 
        height="100%"
        >
            <v-sheet class="mx-10 px-10 py-16" width="500px">
                <v-form @submit.prevent>
                <v-text-field
                    v-model="firstName"
                    :rules="rules"
                    label="First name"
                    placeholder="enter your first name"
                    class="mt-6"
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="rules"
                    label="Email"
                    placeholder="enter your email"
                ></v-text-field>

                <a href="/changeAccount" class="my-5  ">Forgot your password?</a>
                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
                <a href="/register">Don't have account</a>
                
                <p align="center" class="my-10">
                    OR
                </p>

                <v-btn class="mt-1" type="submit" append-icon="mdi-google" width="100%">
                    Login with Google 
                </v-btn>
                </v-form>

            </v-sheet>
            <aside class="mx">
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