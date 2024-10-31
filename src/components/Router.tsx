import { authRoutes, nonAuthRoutes } from "@/constants/routes";
import { ElementType, ReactNode, Suspense } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Loader from "./Loader";
import useUser from "@/hooks/useUser";

const createRouter = (
  routes: Array<{ path: string; element: ElementType }>,
  redirectTo: string,
  layout: ReactNode,
) =>
  createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={layout}>
          {routes.map(({ path, element: Element }) => (
            <Route path={path} element={<Element />} />
          ))}
        </Route>
        <Route index element={<Navigate to={redirectTo} />} />
        <Route path="*" element={<Navigate to={redirectTo} />} />
      </>,
    ),
  );

const authRouter = createRouter(authRoutes.routes, "/", authRoutes.layout);
const nonAuthRouter = createRouter(
  nonAuthRoutes.routes,
  "/login",
  nonAuthRoutes.layout,
);

const Router = () => {
  const { user } = useUser();
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={user ? authRouter : nonAuthRouter} />
    </Suspense>
  );
};

export default Router;
