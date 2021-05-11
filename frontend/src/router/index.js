import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import NewSnippet from "../views/NewSnippet.vue";
import ShowSnippet from "../views/ShowSnippet.vue";
import EditSnippet from "../views/EditSnippet.vue";

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
  },
  {
    path: "/snippet/new",
    name: "NewSnippet",
    component: NewSnippet,
  },
  {
    path: "/snippet/:id(\\d+)",
    name: "ShowSnippet",
    component: ShowSnippet,
  },
  {
    path: "/snippet/:id(\\d+)/edit",
    name: "EditSnippet",
    component: EditSnippet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
