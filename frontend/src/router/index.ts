import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue";
import TheUpload from "../components/TheUpload.vue";
import ViewProjects from "@/views/ViewProjects.vue";
import ViewAdmin from '@/views/ViewAdmin.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ViewHome,
    },
    {
      path: "/upload",
      name: "upload",
      component: TheUpload
    },
    {
      path: "/projekte",
      alias: "/projekte/die-steppe",
      name: "projekte",
      component: ViewProjects
    },
    {
      path: "/projekte/:project",
      name: "projekt",
      component: ViewProjects
    },
    {
      path: "/admin",
      name: "admin",
      component: ViewAdmin
    }
  ],
});