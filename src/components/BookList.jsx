import bannerImg from "../assets/bannerImg.png"
import { FaAngleDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooksFromLocalStorage, deleteBooks } from "../utils/localFilemanagement";
import SingleBookList from "./SingleBookList";
const BookList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const savedBooks = getBooksFromLocalStorage();
        setBooks(savedBooks);
    }, [])


    const handleDelete = (book) => {
        deleteBooks(book);
        const updatedBooks = getBooksFromLocalStorage();
        setBooks(updatedBooks);
    }
    const handleSort = sortby => {
        console.log(sortby)

        const sortedBooks = [...books].sort((a, b) => {
            // Sort by Rating first (highest to lowest)
            if (sortby == 'rating') {
                if (b.rating !== a.rating) return b.rating - a.rating;
            } else if (sortby == 'totalPages') {
                // If Rating is the same, sort by Total Pages (highest to lowest)
                if (b.totalPages !== a.totalPages) return b.totalPages - a.totalPages;
            } else if (sortby == 'yearOfPublishing') {
                return b.yearOfPublishing - a.yearOfPublishing;
            }


        });

        setBooks(sortedBooks)

    }

    return (
        <>
            <div className="text-center my-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="bg-[#23BE0A] px-4 py-2 rounded-lg text-white">Sort by <FaAngleDown className="inline" /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-gray-50 px-4 py-2 rounded-lg text-black z-[1] w-52 p-2 shadow">
                        <li className="cursor-pointer" onClick={() => handleSort('rating')}> Rating  </li>
                        <li className="cursor-pointer" onClick={() => handleSort('totalPages')}> Number of pages </li>
                        <li className="cursor-pointer" onClick={() => handleSort('yearOfPublishing')}> Publisher year </li>
                    </ul>
                </div>
            </div>
            {books.map(book => <SingleBookList key={book.bookId}
                book={book}
                handleDelete={handleDelete}></SingleBookList>)}


        </>
    );
};

export default BookList;