import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookProvider";

const BookDetails = () => {
  const { id } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId === parseInt(id));

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishlist } = useContext(BookContext);

  return (
    <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-12">
      <figure className="w-full flex items-center justify-center bg-gray-100 rounded-lg">
        <img src={image} alt={bookName} className="h-[400px]" />
      </figure>

      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By : {author}</h2>

        <p className="py-2 border-y">{category}</p>

        <p>Review : {review}</p>

        <div className="flex items-center gap-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-400 bg-green-100 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="border-t space-y-3">
          <div className="flex justify-between">
            <span>Number of pages:</span>
            <span>{totalPages}</span>
          </div>

          <div className="flex justify-between">
            <span>Publisher:</span>
            <span>{publisher}</span>
          </div>

          <div className="flex justify-between">
            <span>Publish time:</span>
            <span>{yearOfPublishing}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleMarkAsRead(expectedBook)}
              className="btn"
            >
              Mark as Read
            </button>

            <button
              onClick={() => handleWishlist(expectedBook)}
              className="btn btn-primary"
            >
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
