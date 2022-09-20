import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheUpload from "../components/TheUpload.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/upload",
      name: "upload",
      component: TheUpload
    },
  ],
});

export default router;
