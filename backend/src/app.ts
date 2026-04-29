import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 80;

/**
 * Enable CORS
 */
app.use(cors());

/**
 * Basic root route (prevents errors on "/")
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running");
});

/**
 * API routes
 */
app.use("/api", jobRoutes);

/**
 * ERROR HANDLER (FIXED - MUST HAVE 4 PARAMS)
 */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});