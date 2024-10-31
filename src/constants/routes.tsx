import { lazy } from "react";
import Layout from "../components/Layout";

export const authRoutes = {
  layout: <Layout />,
  routes: [
    {
      path: "/profile",
      element: lazy(() => import("@/pages/ProfilePage")),
    },
    {
      path: "/messages",
      element: lazy(() => import("@/pages/MessagesPage")),
    },
    {
      path: "/followers",
      element: lazy(() => import("@/pages/FollowersPage")),
    },
    {
      path: "/search",
      element: lazy(() => import("@/pages/SearchPage")),
    },
    {
      path: "/notifications",
      element: lazy(() => import("@/pages/NotificationsPage")),
    },
  ],
};

export const nonAuthRoutes = {
  layout: null,
  routes: [
    {
      path: "/register",
      element: lazy(() => import("@/pages/RegisterPage")),
    },
    {
      path: "/login",
      element: lazy(() => import("@/pages/LoginPage")),
    },
  ],
};
