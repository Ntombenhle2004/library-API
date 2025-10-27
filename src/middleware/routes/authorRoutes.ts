import express, { Request, Response } from "express";
import { books } from "./bookRoutes"; // import books for author-books relation

const router = express.Router();

// In-memory authors
export let authors = [
  { id: 1, name: "J.K. Rowling", bio: "Author of Harry Potter" },
  { id: 2, name: "Chinua Achebe", bio: "Author of Things Fall Apart" },
];

// GET all authors
router.get("/", (req: Request, res: Response) => {
  res.json(authors);
});

// GET author by ID
router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const author = authors.find((a) => a.id === id);
  if (!author) return res.status(404).json({ message: "Author not found" });
  res.json(author);
});

// CREATE new author
router.post("/", (req: Request, res: Response) => {
  const { name, bio } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const newAuthor = { id: authors.length + 1, name, bio };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// UPDATE author
router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const author = authors.find((a) => a.id === id);
  if (!author) return res.status(404).json({ message: "Author not found" });

  const { name, bio } = req.body;
  if (name) author.name = name;
  if (bio) author.bio = bio;
  res.json(author);
});

// DELETE author
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  authors = authors.filter((a) => a.id !== id);
  res.status(204).send();
});

// GET all books by an author
router.get("/:id/books", (req: Request, res: Response) => {
  const authorId = parseInt(req.params.id);
  const authorExists = authors.some((a) => a.id === authorId);
  if (!authorExists)
    return res.status(404).json({ message: "Author not found" });

  const authorBooks = books.filter((b) => b.authorId === authorId);
  res.json(authorBooks);
});

export default router;
