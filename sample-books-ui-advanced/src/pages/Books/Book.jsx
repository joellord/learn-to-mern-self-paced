import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { title, _id } = props;
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/book/${_id}`}>View Book</Link>
    </div>
  )
}

export default Book;