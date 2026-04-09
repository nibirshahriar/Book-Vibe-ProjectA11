import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleMarkAsRead = (book) => {
    const isExistBook = storeBooks.find((b) => b.bookId === book.bookId);

    if (isExistBook) {
      toast.error("This Book is already exist");
    } else {
      setStoreBooks([...storeBooks, book]);
      toast.success(`${book.bookName} is added to Read list`);
    }
  };
  const handleWishlist = (book) => {
    const isExistInReadList = storeBooks.find((b) => b.bookId === book.bookId);
    if (isExistInReadList) {
      toast.error("This Book is already exist in Read List");
      return;
    }

    const isExistBook = wishlist.find((b) => b.bookId === book.bookId);

    if (isExistBook) {
      toast.error("This Book is already exist");
    } else {
      setWishlist([...wishlist, book]);
      toast.success(`${book.bookName} is added to Wishlist`);
    }
  };
  const data = {
    storeBooks,
    setStoreBooks,
    handleMarkAsRead,
    wishlist,
    setWishlist,
    handleWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
