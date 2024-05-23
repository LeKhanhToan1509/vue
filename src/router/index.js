import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store";
import HomeView from "../views/User/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/UserRegistration/LoginBox.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("../views/UserRegistration/SignupBox.vue"),
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("../views/UserRegistration/ForgotPassword.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/User/AboutView.vue"),
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("../views/User/ShopView.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/User/ContactView.vue"),
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("../views/User/CartView.vue"),
    },
    {
        path: "/term",
        name: "term",
        component: () => import("../views/User/TermAndConditions.vue"),
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () => import("../views/User/CheckoutView.vue"),
        beforeEnter: (to, from, next) => {
            if (store.state.user) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/cart/:id",
        name: "cartItem",
        component: () => import("../views/User/CartItemView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
