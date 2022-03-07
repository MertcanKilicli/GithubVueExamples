import Vue from "vue";
import VueRouter from "vue-router";
import Overview from "../views/Overview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "OverView",
    component: Overview,
  },
  {
    path: "/repo",
    name: "repo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "TheRepositories" */ "../views/TheRepositories.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
