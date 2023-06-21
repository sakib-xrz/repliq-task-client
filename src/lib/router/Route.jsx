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
import Summary from "../../pages/summary";
import Customers from "../../pages/customers";
import Orders from "../../pages/orders";
import Product from "../../pages/products";
import PrivateRoute from "./PrivateRoute";
import LoginRoute from "./LoginRoute";
import AdminRoute from "./AdminRoute";

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
                element: (
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                ),
            },
            {
                path: "/orders/:phone",
                element: (
                    <PrivateRoute>
                        <Order />
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard",
                element: (
                    <AdminRoute>
                        <Dashboard />
                    </AdminRoute>
                ),
                children: [
                    {
                        path: "/dashboard",
                        element: (
                            <AdminRoute>
                                <Summary />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: "/dashboard/summary",
                        element: (
                            <AdminRoute>
                                <Summary />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: "/dashboard/customers",
                        element: (
                            <AdminRoute>
                                <Customers />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: "/dashboard/orders",
                        element: (
                            <AdminRoute>
                                <Orders />
                            </AdminRoute>
                        ),
                    },
                    {
                        path: "/dashboard/products",
                        element: (
                            <AdminRoute>
                                <Product />
                            </AdminRoute>
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: (
            <LoginRoute>
                <Login />
            </LoginRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <LoginRoute>
                <Register />
            </LoginRoute>
        ),
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
