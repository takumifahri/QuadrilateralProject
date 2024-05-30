/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
import { createRouter, createWebHistory } from "vue-router";


// import index from "@/pages/index.vue"
import home from "@/pages/home.vue";

import Loginn from "@/pages/loginn.vue";

import regists from "@/pages/registss.vue";
import Lobby from "@/pages/Lobby.vue";
import ChangePW from "@/pages/changePW.vue";
import ResetPW from "@/pages/resetPW.vue";
// import drawerApp from "../pages/drawerApp.vue";
import dashboardPage from "@/pages/dashboardPage.vue";
import organisasiPage from "@/pages/organisasiPage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path: "/", component: home},
    {path: "/login", component: Loginn },
    {path: "/regists", component: regists},
    {path: "/lobbiess", component: Lobby},
    {path: "/changePassword", component: ChangePW}, 
    {path: "/resetPassword", component: ResetPW},
    {path: "/dashboard", component: dashboardPage},
    {path: "/organisasi", component: organisasiPage},
  ]
});

//const routes =  [
//   {
//     component : HelloWorld,
//     name : "HelloWorld",
//     patch : "/HelloWorld"
//   }

// ]
// export default new VueRouter({
//   routes,
// });
export default router
