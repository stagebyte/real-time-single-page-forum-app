import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "../components/login/Login.vue";
import Signup from "../components/login/signup.vue";
import Forum from "../components/forum/Forum.vue";
import Read from "../components/forum/read.vue";
import Create from "../components/forum/create.vue";
import Logout from "../components/login/Logout.vue";

const routes = [
    { path: "/login", component: Login },
    { path: "/logout", component: Logout },
    { path: "/signup", component: Signup },
    { path: "/forum", component: Forum, name: "forum" },
    { path: "/ask", component: Create },
    { path: "/question/:slug", component: Read, name: "read" }
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: "history"
});

export default router;
