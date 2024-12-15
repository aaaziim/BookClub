
import { useEffect, useState } from "react";
import { getWishlistFromLocalStorage } from "../utils/localFilemanagement";
import SingleBookList from "./SingleBookList";
import { deleteWishlist } from "../utils/localFilemanagement";


const WishList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const savedBooks = getWishlistFromLocalStorage();
        setBooks(savedBooks);
    }, [])

    const handleDelete = (book) => {
        deleteWishlist(book);
        const updatedWishlist = getWishlistFromLocalStorage();
        setBooks(updatedWishlist);
    }




    return (
        <>

            {books.map(book => <SingleBookList key={book.bookId}
                book={book}
                handleDelete={handleDelete}
            ></SingleBookList>)}


        </>
    );
};

export default WishList;