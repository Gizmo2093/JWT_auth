import { createWebHistory, createRouter } from "vue-router";
import listdoctors from "@/components/ListDoctors.vue";
import registration from "@/components/auth/Registration.vue";
import login from "@/components/auth/Login.vue";
import page404 from "@/components/Page404.vue";

const routes = [
  {
    path: "/doctors",
    component: listdoctors,
    name: "listdoctors",
  },
  {
    path: "/auth/login",
    component: login,
    name: "auth.login",
  },
  {
    path: "/auth/registration",
    component: registration,
    name: "auth.registration",
  },
  {
    path: "/:catchAll(.*)",
    component: page404,
    name: "404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("access_token")) {
    return to.name == "auth.login" || to.name == "auth.registration"
      ? next()
      : next({ name: "auth.login" });
  }
  if (
    to.name === "auth.login" ||
    (to.name == "auth.registration" && localStorage.getItem("access_token"))
  ) {
    return next({ name: "listdoctors" });
  }
  next();
});

export default router;
