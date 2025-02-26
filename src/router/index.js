import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../views/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainLayout,
      children: [
        {
          path: "/api-docs",
          name: "route_api_docs",
          component: () => import("../views/ApiList.vue"),
        },
        {
          path: "/general-dashboard",
          name: "general_dashboard",
          component: () => import("../components/MainPage.vue"),
        },
      ],
    },
  ],
});

export default router;
