import { FaAngleDown } from "react-icons/fa";
import BookList from "../components/BookList";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const ListedBooks = () => {

    const location = useLocation();

    const [tabIndex, setTabIndex] = useState(() => {
        return location.pathname.endsWith("/wishlist") ? 1 : 0;
    });

    useEffect(() => {
        // Update tabIndex when the route changes
        setTabIndex(location.pathname.endsWith("/wishlist") ? 1 : 0);
    }, [location.pathname]);





    return (
        <div>
            <div className="my-4">
                <h2 className="text-2xl font-bold text-black text-center p-4 bg-gray-200 rounded-2xl">Books</h2>
            </div>



            <div className="my-10">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link to="/listedbooks"
                        onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex == 0 ? 'border-2 border-b-0' : 'border-b'
                            }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Reading List</span>
                    </Link>
                    <Link to='/listedbooks/wishlist'
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex == 1 ? 'border-2 border-b-0' : 'border-b'
                            }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist</span>
                    </Link>



                </div>
                <div className="mb-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;