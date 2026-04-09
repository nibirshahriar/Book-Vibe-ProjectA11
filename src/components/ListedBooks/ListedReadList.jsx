import React, { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";
import BookCard from "../../UI/BookCard";

const ListedReadList = () => {
  const { storeBooks } = useContext(BookContext);
  if (storeBooks.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">No Read List Books Here</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {storeBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
