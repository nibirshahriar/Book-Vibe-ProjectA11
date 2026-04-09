// READ LIST

const getAllReadListFromLocalDb = () => {
  const allReadList = localStorage.getItem("readList");

  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListtoLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDb();

  const existBook = allBooks.find((b) => b.bookId === book.bookId);

  if (!existBook) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

//WISHLIST

const getAllWishListFromLocalDb = () => {
  const allWishList = localStorage.getItem("wishList");

  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const addWishListToLocalDB = (book) => {
  const allWishBooks = getAllWishListFromLocalDb();

  const existBook = allWishBooks.find((b) => b.bookId === book.bookId);

  if (!existBook) {
    allWishBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allWishBooks));
  }
};

//EXPORT

export {
  getAllReadListFromLocalDb,
  addReadListtoLocalDB,
  getAllWishListFromLocalDb,
  addWishListToLocalDB,
};
