import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../../pages/error";
import Home from "../../pages/home";

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
        ],
    },
]);

export default router;
