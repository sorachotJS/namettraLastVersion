import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const FrontendLayout = lazy(() => import("../layouts/FrontendLayourt"));
const BackendLayout = lazy(() => import("../layouts/BackendLayout"));
import routes from "./routes";

const finalRoutes = routes.map((route) => {
    return {
      ...route,
      element:
        route.layout === 'FrontendLayout' ? (
          <FrontendLayout>{route.element}</FrontendLayout>
        ) : (
          <BackendLayout>{route.element}</BackendLayout>
        ),
    };
  });
  
  const router = createBrowserRouter(finalRoutes);
  export default router;