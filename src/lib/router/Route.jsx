import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../../pages/error";
import Home from "../../pages/home";
import Cart from "../../pages/cart";
import Login from "../../pages/entrance/Login";
import Register from "../../pages/entrance/Register";
import Checkout from "../../pages/checkout";

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
]);

export default router;
