import React, { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const { bookShelf } = useContext(BooksContext);
  const searchedBooks = bookShelf.filter((book) =>
    book.title.toLowerCase().includes(searchedQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center m-2">
        <h2 className="font-bold text-3xl">Search any book </h2>
        <Link
          className="text-3xl bg-gray-400 px-5 py-2 rounded-lg text-white"
          to="/"
        >
          Home
        </Link>
      </div>
      <input
        type="text"
        // className="bg-gray-300 p-2 w-full m-2 "
        className="bg-gray-300 p-2 w-[80vw] block mx-auto mb-10 "
        placeholder="search any book"
        onChange={(e) => setSearchedQuery(e.target.value)}
      />
      <div className="flex gap-10 flex-wrap justify-center pt-10 pb-20 px-5">
        {searchedQuery.length ? (
          searchedBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <div className="text-2xl mt-5 mx-auto text-gray-500">
            Search any book...
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
