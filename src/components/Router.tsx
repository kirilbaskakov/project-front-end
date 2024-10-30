import { authRoutes, nonAuthRoutes } from "@/constants/routes";
import React, { Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Loader from "./Loader";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<authRoutes.layout />}>
        {authRoutes.routes.map(({ path, element: Element }) => (
          <Route path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="/">
        {nonAuthRoutes.routes.map(({ path, element: Element }) => (
          <Route path={path} element={<Element />} />
        ))}
      </Route>
    </>,
  ),
);

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
