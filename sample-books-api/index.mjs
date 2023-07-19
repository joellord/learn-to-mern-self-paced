import express from "express";
import cors from "cors";

const port = process.env.PORT || 5050;

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
];

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const serverStatus = {
    status: "running",
    port: port,
    timestamp: new Date().getTime(),
    message: "Welcome to my book API"
  };
  res.json(serverStatus).status(200);
});

app.get("/books", (req, res) => {
  res.json(books).status(200);
});

app.get("/books/:id", (req, res) => {
  const book = books[parseInt(req.params.id)];
  res.json(book).status(200);
});

app.post("/books", (req, res) => {
  let book = req.body;
  books.id = books.length;
  books.push(book);
  res.json(book).status(201);
});

app.put("/books/:id", (req, res) => {
  let book = req.body;
  books[parseInt(req.params.id)] = book;
  res.json(book).status(200);
});

app.delete("/books/:id", (req, res) => {
  books.splice(parseInt(req.params.id), 1);
  res.status(204).send();
});

app.listen(port, () => console.log(`Server running on port ${port}`));