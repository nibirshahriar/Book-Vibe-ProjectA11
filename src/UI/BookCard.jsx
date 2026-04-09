import React from "react";
import { FaRegStar } from "react-icons/fa";
const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-6">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-lg h-[250px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3">
          {book.tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-400 bg-green-100 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="font-semibold text-lg">By : {book.author}</p>

        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
          <div className="font-semibold">{book.category}</div>
          <div className="font-semibold text-xl">
            <div className="flex gap-2 items-center">
              {book.rating} <FaRegStar />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
