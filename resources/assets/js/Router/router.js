import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/login", component: Login }];

import Login from "../components/login/Login.vue";
const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: "history"
});

export default router;
