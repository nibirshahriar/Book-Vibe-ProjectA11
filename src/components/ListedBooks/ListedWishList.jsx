import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookProvider";
import BookCard from "../../UI/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { wishlist } = useContext(BookContext);

  const [filterWishList, setFilterWishList] = useState(wishlist);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishlist].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilterWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
        setFilterWishList(sortedData);
      }
    }
  }, [sortingType, wishlist]);

  if (filterWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold">No WishList Books Here</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filterWishList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
