import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import ReviewNew from "../views/ReviewNew.vue";
import ReviewShow from "../views/ReviewShow.vue";
import ReviewEdit from "../views/ReviewEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresNotAuth: true }
  },
  {
    path: "/review/new",
    name: "ReviewNew",
    component: ReviewNew,
    meta: { requiresAuth: true }
  },
  {
    path: "/review/:id(\\d+)",
    name: "ReviewShow",
    component: ReviewShow,
  },
  {
    path: "/review/:id(\\d+)/edit",
    name: "ReviewEdit",
    component: ReviewEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
