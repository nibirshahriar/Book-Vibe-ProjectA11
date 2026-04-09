import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListtoLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDb,
  getAllWishListFromLocalDb,
} from "../utils/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDb());
  const [wishlist, setWishlist] = useState(() => getAllWishListFromLocalDb());

  // local storage
  //   useEffect(() => {
  //     const getReadListFromLocalDB = getAllReadListFromLocalDb();
  //     setReadList(getAllReadListFromLocalDb);
  //   }, []);

  const handleMarkAsRead = (book) => {
    addReadListtoLocalDB(book);

    const isExistBook = readList.find((b) => b.bookId === book.bookId);

    if (isExistBook) {
      toast.error("This Book is already exist");
    } else {
      setReadList([...readList, book]);
      toast.success(`${book.bookName} is added to Read list`);
    }
  };
  const handleWishlist = (book) => {
    addWishListToLocalDB(book);

    const isExistInReadList = readList.find((b) => b.bookId === book.bookId);
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
    readList,
    setReadList,
    handleMarkAsRead,
    wishlist,
    setWishlist,
    handleWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
