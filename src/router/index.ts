import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/search",
    name: "SearchPage",
    component: () => import("../views/MovieSearch.vue"),
  },
  {
    path: "/detail",
    name: "MovieDetailPage",
    component: () => import("../views/MovieDetail.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
