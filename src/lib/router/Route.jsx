import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../../pages/error";
import Home from "../../pages/home";
import Cart from "../../pages/cart";
import Login from "../../pages/entrance/Login";
import Register from "../../pages/entrance/Register";
import Checkout from "../../pages/checkout";
import Success from "../../pages/success";
import Fail from "../../pages/fail";
import Order from "../../pages/order";
import Dashboard from "../../pages/dashboard";
import Summery from "../../pages/summery";
import Customers from "../../pages/customers";
import Orders from "../../pages/orders";
import Product from "../../pages/products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/orders/:phone",
                element: <Order />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Summery />,
                    },
                    {
                        path: "/dashboard/summery",
                        element: <Summery />,
                    },
                    {
                        path: "/dashboard/customers",
                        element: <Customers />,
                    },
                    {
                        path: "/dashboard/orders",
                        element: <Orders />,
                    },
                    {
                        path: "/dashboard/products",
                        element: <Product />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/payment/success/:tranId",
        element: <Success />,
    },
    {
        path: "/payment/fail/:tranId",
        element: <Fail />,
    },
]);

export default router;
