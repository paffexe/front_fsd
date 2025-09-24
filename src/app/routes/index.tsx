import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const NotFound = lazy(() => import("@/pages/notFound"));

const AppRouter = memo(() => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return router;
});

export default AppRouter;
