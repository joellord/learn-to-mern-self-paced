import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function New () {

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleButtonSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:5050/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    return navigate("/");
  };

  return (
    <>
      <h2>Create new book</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={form.title} onChange={handleInputChange}/>
        <br/>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author"  value={form.author} onChange={handleInputChange}/>
        <br/>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description"  value={form.description} onChange={handleInputChange}/>
        <br/>
        <label htmlFor="pages">Pages</label>
        <input type="number" id="pages" name="pages"  value={form.pages} onChange={handleInputChange}/>
        <br/>
        <button type="submit" onClick={handleButtonSubmit}>Create</button>
      </form>
    </>
  )
}

export default New;