export default {

  component: () =>
    import(/* webpackChunkName: "EditorLayout" */ "../layouts/EditorLayout"),
  children: [
    {
      path: "",
      name: "person",
      component: () =>
        import(/* webpackChunkName: "Person" */ "../views/Person")
    },
    {
      path: "",
      name: "positive",
      component: () =>
        import(/* webpackChunkName: "Positive" */ "../views/Positive")
    },
    
  ],
};
