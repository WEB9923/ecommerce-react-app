import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import NotFound from "../pages/not-found/NotFound.jsx";
import Home from "../pages/home/Home.jsx";
import Products from "../pages/products/Products.jsx";
import Single from "../pages/single/Single.jsx";

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {path:"/", element: <Home />},
            {path:"/products", element: <Products />},
            {path:"/product/:productId", element: <Single />},
        ]
    }
]);

export default Routes;