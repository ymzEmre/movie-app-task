import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/MovieSearch.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/MovieDetail.vue"),
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
