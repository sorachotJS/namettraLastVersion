import { lazy } from "react"
import ProductMonk from "../pages/frontend/ProductMonkPage";
import Product from "../pages/frontend/ProductNormal";
import ProductDetailPage from "../pages/frontend/ProductDetailPage";

const FrontendHomePage = lazy(() => import("../pages/frontend/HomePage"));
// const Product = lazy(() => import("../pages/frontend/ProductNormal"));
// const ProductMonk = lazy(() => import("../pages/frontend/ProductMonk"));
const BackendHomePage = lazy(() => import("../pages/backend/HomePage"));

const routes = [
    {
        path: "",
        element: <FrontendHomePage />,
        layout: "FrontendLayout",
    },
    {
        path: "product",
        element: <Product />,
        layout: "FrontendLayout",
    },
    {
        path: "productmonk",
        element: <ProductMonk />,
        layout: "FrontendLayout",
    },
    {
        path: "/productt/:type",
        element: <ProductDetailPage />,
        layout: "BackendLayout",
    
    },
    {
        path: "/admin",
        element: <BackendHomePage />,
        layout: "BackendLayout",
    },
];

export default routes;