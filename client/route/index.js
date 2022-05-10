import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/home.vue";
// import About from "../views/about.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/home.vue"),
      // component: Home
    },
    {
      path: "/about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/about.vue"),
      // component: About
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

export default router;
