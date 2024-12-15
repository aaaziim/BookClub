import bannerImg from "../assets/bannerImg.png"
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



    return (
        <>

            {books.map(book => <SingleBookList key={book.bookId}
                book={book}
                handleDelete={handleDelete}></SingleBookList>)}


        </>
    );
};

export default BookList;