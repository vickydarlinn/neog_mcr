import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { useContext } from "react";
import BooksContext from "../context/BooksContext";

const BookCard = ({ book }) => {
  const { handleBookshelf } = useContext(BooksContext);
  const [isVisible, setIsVisible] = useState(false);
  const title = book.title;
  const image = book.image_url;
  const author = book.author;
  const uniqueName = `shelf_type_${book.id}`;

  const handleShelfChange = (e, book) => {
    console.log(e.target.value);
    console.log(book);
    handleBookshelf(book.id, e.target.value);
  };
  return (
    <div className="border border-gray-300 p-2 rounded-lg flex flex-col justify-between  ">
      <div className="w-[200px]  relative">
        <img className="w-full  inline-block" src={image} alt={book.id} />
        <div className="absolute top-0 z-10 right-0 translate-x-[50%] translate-y-[-50%] ">
          <button
            className="bg-green-800 p-3 rounded-full text-white"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <BiSolidDownArrow />
          </button>
          {isVisible && (
            <div className="bg-red-300 absolute left-1/2 top-1/2 w-40 p-2 rounded-lg">
              <p>Move to..</p>
              <div>
                <input
                  type="radio"
                  id={`want_to_read_${book.id}`}
                  name={uniqueName}
                  value="want_to_read"
                  checked={book.shelf === "want_to_read" ? true : false}
                  onChange={(e) => handleShelfChange(e, book)}
                />
                <label htmlFor={`want_to_read_${book.id}`}>Want To read</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={`currently_reading_${book.id}`}
                  name={uniqueName}
                  value="currently_reading"
                  checked={book.shelf === "currently_reading" ? true : false}
                  onChange={(e) => handleShelfChange(e, book)}
                />
                <label htmlFor={`currently_reading_${book.id}`}>
                  currently reading
                </label>
              </div>{" "}
              <div>
                <input
                  type="radio"
                  id={`read_${book.id}`}
                  name={uniqueName}
                  value="read"
                  checked={book.shelf === "read" ? true : false}
                  onChange={(e) => handleShelfChange(e, book)}
                />
                <label htmlFor={`read_${book.id}`}>Read</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <p>{title}</p>
        <span className="text-gray-500">{author}</span>
      </div>
    </div>
  );
};

export default BookCard;
