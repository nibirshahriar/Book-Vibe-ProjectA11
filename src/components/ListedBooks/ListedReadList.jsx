import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookProvider";
import BookCard from "../../UI/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  const filterReadList = React.useMemo(() => {
    if (sortingType === "pages") {
      return [...readList].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
      return [...readList].sort((a, b) => a.rating - b.rating);
    }
    return readList;
  }, [sortingType, readList]);

  if (filterReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">No Read List Books Here</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filterReadList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
