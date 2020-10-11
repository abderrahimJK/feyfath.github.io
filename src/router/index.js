import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/1bac",
    name: "Bac1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Bac1" */ "../views/Bac1.vue"),
  },
  {
    path: "/bts",
    name: "Bts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bts" */ "../views/Bts.vue"),
  },{
    path: "/2bac",
    name: "Bac2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Bac2" */ "../views/Bac2.vue"),
  },
  {
    path: "/tct",
    name: "Tct",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Tct" */ "../views/Tct.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
