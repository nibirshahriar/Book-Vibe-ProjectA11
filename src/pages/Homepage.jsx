import React, { useEffect, useState } from "react";
import Banner from "../components/Homepage/Banner";
import AllBooks from "../components/Homepage/AllBooks";

const Homepage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <Banner />
      <AllBooks books={books} />
    </div>
  );
};

export default Homepage;
