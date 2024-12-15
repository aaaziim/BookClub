
import { useEffect, useState } from "react";
import { getWishlistFromLocalStorage } from "../utils/localFilemanagement";
import SingleBookList from "./SingleBookList";
const WishList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const savedBooks = getWishlistFromLocalStorage();
        setBooks(savedBooks);
    }, [])


    return (
        <>

            {books.map(book => <SingleBookList key={book.bookId}
                book={book}></SingleBookList>)}


        </>
    );
};

export default WishList;