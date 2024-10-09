import { lazy } from "react";

const routes = [
  {
    path: "/register",
    element: lazy(() => import("@/pages/RegisterPage")),
  },
  {
    path: "/login",
    element: lazy(() => import("@/pages/LoginPage")),
  },
];

export default routes;
