import { createRouter, createWebHistory } from "vue-router";
import isAuthenticatedGuard from "../modules/authentication/guard/auth-guard";

/* import the modelules routers */
import categoryRouter from "../modules/category/router"
import editorRouter from "../modules/editor/router";


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home"),
  },
  {
    path: "/category",
    beforeEnter: [isAuthenticatedGuard],
    ...categoryRouter,
  },
  {
    path: "/editor",
    beforeEnter: [isAuthenticatedGuard],
    ...editorRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
