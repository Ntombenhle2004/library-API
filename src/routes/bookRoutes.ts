import express, { Request, Response } from "express";
import { authors } from "./authorRoutes";

const router = express.Router();

export let books = [
  { id: 1, title: "Harry Potter", year: 1997, authorId: 1 },
  { id: 2, title: "Things Fall Apart", year: 1958, authorId: 2 },
];

router.get("/", (req: Request, res: Response) => {
  res.json(books);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

router.post("/", (req: Request, res: Response) => {
  const { title, year, authorId } = req.body;

  if (!title || !year || !authorId)
    return res.status(400).json({ message: "Missing fields" });

  const authorExists = authors.some((a) => a.id === authorId);
  if (!authorExists)
    return res.status(400).json({ message: "Invalid authorId" });

  const duplicate = books.some(
    (b) => b.title === title && b.authorId === authorId
  );
  if (duplicate) return res.status(409).json({ message: "Duplicate book" });

  const newBook = { id: books.length + 1, title, year, authorId };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, year, authorId } = req.body;

  if (authorId) {
    const authorExists = authors.some((a) => a.id === authorId);
    if (!authorExists)
      return res.status(400).json({ message: "Invalid authorId" });
    book.authorId = authorId;
  }
  if (title) book.title = title;
  if (year) book.year = year;

  res.json(book);
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  books = books.filter((b) => b.id !== id);
  res.status(204).send();
});

export default router;
