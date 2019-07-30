import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 不添加mode为history的话，路由方式是加#，导致不能立刻跳转，后面切成多页面的形式的时候会报错的
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/map"
    },
    {
      path: "/map",
      name: "地图",
      component: () => import("./views/Map.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.name) {
    document.title = to.name;
  }
  next();
});

export default router;
