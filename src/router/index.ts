import { auth } from "@/Firebase";
import store from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "user-list",
    component: () => import("../views/Custom_DataTable/Home.vue")
  },
  {
    path:"/customers",
    name:"customers",
    component:()=>import("../views/Custom_DataTable/Customers.vue")
  },

  {
    path: "/home",
    name: "home",
    component:()=>import('../views/my_learning/HomeView.vue'),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/SignUp/Login.vue"),
  },

  {
    path: "/event",
    name: "event",
    component: () => import("../views/my_learning/EventHandling.vue"),
  },
  {
    path: "/first",
    name: "first",
    component: () => import("../views/my_learning/Interpolation.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/my_learning/ListRendering.vue"),
    children: [
      {
        path: "",
        name: "emety",
        component: () => import("../views/my_learning/EmetyUser.vue"),
      },
      {
        path: "/list/:id",
        name: "item",
        component: () => import("../views/my_learning/ItemDetials.vue"),
      },
    ],
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import( "../views/my_learning/ProtectedAdmin.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/customdirectives",
    name: "customdirectives",
    component: () => import("../views/my_learning/CustomDirectives.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.authRequired && !auth.currentUser)
  ) {
    if (store.getters.userLoggedIn) {
      next();
      return;
    }

    next("/protected");
  } else {
    next();
  }
});

export default router;
