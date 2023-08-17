import BooksContext from "./BooksContext";
import { useState } from "react";
import { books } from "../data";

const BooksProvider = ({ children }) => {
  // here bookshelf is an array of all books
  // and handleBookshelf is a function , which will take that book  and  newSelf value which is assigned to them
  const [bookShelf, setBookshelf] = useState(books);
  const handleBookshelf = (bookId, newSelf) => {
    setBookshelf((prevBooks) => {
      const updatedBookshelf = prevBooks.map((book) => {
        if (book.id === bookId) {
          return { ...book, shelf: newSelf };
        }
        return book;
      });
      return updatedBookshelf;
    });
  };
  return (
    <BooksContext.Provider value={{ bookShelf, handleBookshelf }}>
      {children}
    </BooksContext.Provider>
  );
};
export default BooksProvider;
