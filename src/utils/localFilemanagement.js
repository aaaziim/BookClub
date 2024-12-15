import toast from "react-hot-toast";

export const getBooksFromLocalStorage = () => {
    const storedBooks = localStorage.getItem('booksList');
    return storedBooks ? JSON.parse(storedBooks) : [];
};

export const saveBookToLocalStorage = (book) => {

    const booksList = getBooksFromLocalStorage();

    const isBookAlreadySaved = booksList.some(savedBook => savedBook.bookId === book.bookId);

    if (isBookAlreadySaved) {
        return toast.error('Book is already in your Read List!')
    }

    // Add new book and save to localStorage
    booksList.push(book);
    localStorage.setItem('booksList', JSON.stringify(booksList));
    return toast.success('Book has been added to your Read List')
};


export const getWishlistFromLocalStorage = () => {
    const storedBooks = localStorage.getItem('wishlist');
    return storedBooks ? JSON.parse(storedBooks) : [];
};



export const saveWishlistToLocalStorage = (book) => {

    const wishList = getWishlistFromLocalStorage();

    const isBookAlreadyWishlisted = wishList.some(savedBook => savedBook.bookId === book.bookId);

    if (isBookAlreadyWishlisted) {
        return toast.error('Book is already in your Wishlist!')
    }

    // Add new book and save to localStorage
    wishList.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishList));
    return toast.success('Book has been added to your Wishlist')
};
