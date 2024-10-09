import routes from "@/constants/routes";
import React, { Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      {routes.map(({ path, element: Element }) => (
        <Route path={path} element={<Element />} />
      ))}
    </>,
  ),
);

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
