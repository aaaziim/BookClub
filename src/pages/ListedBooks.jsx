import { FaAngleDown } from "react-icons/fa";
import BookList from "../components/BookList";
const ListedBooks = () => {
    return (
        <div>
            <div className="my-4">
                <h2 className="text-2xl font-bold text-black text-center p-4 bg-gray-200 rounded-2xl">Books</h2>
            </div>

            <div className="text-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="bg-[#23BE0A] px-4 py-2 rounded-lg text-white">Sort by <FaAngleDown className="inline" /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-gray-50 px-4 py-2 rounded-lg text-black z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <div className="my-10">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Architecto</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Corrupti</span>
                    </a>



                </div>
                <div className="mb-10">
                    {<BookList></BookList>}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;