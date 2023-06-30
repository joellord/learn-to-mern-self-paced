import React, {useState, useEffect} from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:5050/books").then(resp => resp.json());
      setBooks(response);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.map((book, index) => {
        return (
          <Book key={index} {...book} />
        )
      })}
    </div>
  );
}

export default Books;