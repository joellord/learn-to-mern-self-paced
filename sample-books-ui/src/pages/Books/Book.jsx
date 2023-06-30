import React from "react";

const Book = (props) => {
  const { title, author, description, pages, currentPage, read } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Description: {description}</p>
      <p>Pages: {pages}, currentPage: {currentPage}, read: {read ? "Yes" : "No"}</p>
    </div>
  )
}

export default Book;