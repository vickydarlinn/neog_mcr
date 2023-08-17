import React from "react";
import { useContext } from "react";
import BooksContext from "../context/BooksContext";
import BookCard from "../components/BookCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { bookShelf } = useContext(BooksContext);
  const currently_reading_books = bookShelf.filter(
    (book) => book.shelf === "currently_reading"
  );
  const read_books = bookShelf.filter((book) => book.shelf === "read");
  const want_to_read_books = bookShelf.filter(
    (book) => book.shelf === "want_to_read"
  );
  return (
    <>
      <h1 className="text-center text-4xl pb-5 pt-2">Book shelf</h1>
      <input
        type="text"
        className="bg-gray-300 p-2 w-[80vw] block mx-auto mb-10 "
        placeholder="search any book"
        onClick={() => navigate("/search")}
      />
      <section>
        <h2 className="font-bold text-3xl">Want to read books </h2>
        <div className="flex gap-10 overflow-y-scroll pt-10 pb-20 px-5">
          {want_to_read_books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-bold text-3xl">Currently reading</h2>
        <div className="flex gap-10 overflow-y-scroll pt-10 pb-20 px-5">
          {currently_reading_books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>{" "}
      <section>
        <h2 className="font-bold text-3xl">Readed Books</h2>
        <div className="flex gap-10 overflow-y-scroll pt-10 pb-20 px-5">
          {read_books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
