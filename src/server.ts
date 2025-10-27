import express from "express";
import bodyParser from "body-parser";
import { logger } from "./middleware/logger";
import authorRoutes from "./routes/authorRoutes";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logger);

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
