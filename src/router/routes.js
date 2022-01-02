const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/dashboard/Dashboard.vue") },
      {
        path: "/Tables",
        component: () => import("pages/table/Tables.vue"),
      },
      {
        path: "/Charts",
        component: () => import("pages/grafik/Charts.vue"),
      },
    ],
  },
];

export default routes;
