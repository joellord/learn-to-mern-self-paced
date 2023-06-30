import express from "express";
import cors from "cors";
import db from "./utils/db.mjs";
import { ObjectId } from "mongodb";

const port = process.env.PORT || 5050;
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

app.get("/books", async (req, res) => {
  const books = await db.collection("books").find({}).toArray();
  res.json(books).status(200);
});

app.get("/books/:id", async (req, res) => {
  const book = await db.collection("books").findOne({ _id: new ObjectId(req.params.id) });
  res.json(book).status(200);
});

app.post("/books", async (req, res) => {
  let book = req.body;
  console.log(book);
  const result = await db.collection("books").insertOne(book);
  res.json(result).status(201);
});

app.put("/books/:id", async (req, res) => {
  let book = req.body;
  const result = await db.collection("books").updateOne({ _id: new ObjectId(req.params.id) }, { $set: book });
  res.json(result).status(200);
});

app.delete("/books/:id", async (req, res) => {
  const result = await db.collection("books").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result).status(200);
});

app.listen(port, () => console.log(`Server running on port ${port}`));