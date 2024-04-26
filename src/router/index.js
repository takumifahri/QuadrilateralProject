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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path: "/", component: home },
    // {path: "/", component: header}
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
