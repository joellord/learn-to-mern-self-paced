import React from "react";

import Book from "./Book";

const books = [
  {
    id: 0,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A book about following your dreams",
    pages: 163,
    currentPage: 163,
    read: true
  },
  {
    id: 1,
    title: "The Prophet",
    author: "Kahlil Gibran",
    description: "A story about a prophet",
    pages: 107,
    currentPage: 23,
    read: false
  },
  {
    id: 2,
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    description: "This book is about the fictitious travels and speeches of Zarathustra.",
    pages: 352,
    currentPage: 52,
    read: false
  }
]

const Books = () => {
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