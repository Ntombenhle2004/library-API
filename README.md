<img src="https://socialify.git.ci/Ntombenhle2004/library-API/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="library-API" width="640" height="320" />


# Library API

A simple **RESTful API** built with **Node.js**, **Express**, and **TypeScript** for managing a library system with **Authors** and **Books**. This API supports CRUD operations, validation, middleware logging, and relationship management (each book belongs to an author).

---

## Getting Started

### Clone the Repository
git clone https://github.com/Ntombenhle2004/library-API.git
cd library-API

### Install Dependencies
npm install

### Run the Server
Development mode (with live reload):
npm run dev

Production mode:
npm start

The API will start at:
http://localhost:3000

---

## Project Structure

library-api/
│
├── src/
│   ├── models/
│   │   ├── author.ts
│   │   └── book.ts
│   ├── routes/
│   │   ├── authorRoutes.ts
│   │   └── bookRoutes.ts
│   ├── middleware/
│   │   ├── logger.ts
│   │   └── validation.ts
│   ├── server.ts
│
├── package.json
├── tsconfig.json
└── README.md

---

## 📘 API Endpoints

### 🧍 Authors

➕ Create Author  
POST /authors  
Body:
{
  "name": "J.K. Rowling",
  "birthYear": 1965
}

 List All Authors  
GET /authors

🔍 Get Author By ID  
GET /authors/:id

 Update Author  
PUT /authors/:id  
Body:
{
  "name": "Joanne Rowling",
  "birthYear": 1965
}


 Delete Author  
DELETE /authors/:id

---

###  Books

 Create Book  
POST /books  
Body:
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "year": 1997,
  "authorId": 1
}

 List All Books  
GET /books

 Get Book By ID  
GET /books/:id

 Update Book  
PUT /books/:id  
Body:
{
  "title": "Harry Potter and the Chamber of Secrets",
  "year": 1998,
  "authorId": 1
}

 Delete Book  
DELETE /books/:id

---

### Books by Author

 List All Books by a Specific Author  
GET /authors/:id/books

Example:  
GET http://localhost:3000/authors/1/books

Response Example:
[
  { "id": 1, "title": "Harry Potter", "year": 1997, "authorId": 1 }
]

---

## Middleware

 Logger Middleware  
Logs each incoming request (method & URL).  
Example log:
[GET] /authors

 Validation Middleware  
Ensures required fields are provided for:
- POST /authors
- POST /books
- PUT /authors/:id
- PUT /books/:id

---

## Error Handling

Error Type | HTTP Status | Description  
------------|--------------|--------------  
Invalid Data | 400 | Missing or invalid request body  
Not Found | 404 | Resource not found  
Conflict | 409 | Duplicate book or author entry  

---

## Testing

You can test endpoints using Postman, Insomnia, or curl.

Example:
curl http://localhost:3000/authors

---

## Technologies Used

- Node.js  
- Express.js  
- TypeScript  
- Nodemon (development)  
- Body-parser  
- Express-validator  

---

## Author

**Ntombenhle Ngcobo**  
GitHub: [Ntombenhle2004](https://github.com/Ntombenhle2004)

---

## License

This project is licensed under the **ISC License**.
