import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import PagesToRead from "../pages/PagesToRead"
import SingleBook from "../pages/SingleBook"

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
                path: "/listedbook/:id",
                element: <SingleBook ></SingleBook>
            },
            {
                path: "/pagestoread",
                element: <PagesToRead></PagesToRead>
            },
        ]
    }
])