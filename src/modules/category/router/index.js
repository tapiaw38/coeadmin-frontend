export default {

    component: () =>
      import(/* webpackChunkName: "CategoryLayout" */ "../layouts/CategoryLayout"),
    children: [
      {
        path: "",
        name: "categories",
        component: () =>
          import(/* webpackChunkName: "Categories" */ "../views/Categories"),
      }
    ],
  };
  