import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../../pages/error";
import Home from "../../pages/home";
import Cart from "../../pages/cart";

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
            }
        ],
    },
]);

export default router;
