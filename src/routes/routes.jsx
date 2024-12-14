import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import PagesToRead from "../pages/PagesToRead"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/listedbooks",
                element: <ListedBooks></ListedBooks>
            },
            {
                path: "/pagestoread",
                element: <PagesToRead></PagesToRead>
            },
        ]
    }
])