import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks"
import PagesToRead from "../pages/PagesToRead"
import SingleBook from "../pages/SingleBook"
import BookList from "../components/BookList";
import WishList from "../components/WishList";
import ErrorPage from "../pages/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/listedbooks",
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <BookList></BookList>
                    },
                    {
                        path: "wishlist",
                        element: <WishList></WishList >
                    },
                ]
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