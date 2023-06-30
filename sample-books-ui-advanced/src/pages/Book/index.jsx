import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Book (props) {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:5050/books/${bookId}`);
      const data = await response.json();
      setBook(data);
    }
    fetchBook();
  }, [bookId]);

  return (
    <>
      <h2>{book.title}</h2>

      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Pages: {book.pages}</p>
      <p>Read: {book.read ? 'Yes' : 'No'}</p>
      {!book.read &&
      <p>Current Page: {book.currentPage}</p>
      }
    </>
  )
}

export default Book;