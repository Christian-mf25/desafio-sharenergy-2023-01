import express from "express";
import dotenv from "dotenv";
import apiRouter from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", apiRouter)

export default app;
