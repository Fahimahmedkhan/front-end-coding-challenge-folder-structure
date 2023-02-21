import { createBrowserRouter } from "react-router-dom";
import ClientMainLayout from "../../layout/ClientMainLayout";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientMainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;