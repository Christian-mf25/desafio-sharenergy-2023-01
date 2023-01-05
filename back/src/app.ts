import express, { json, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import apiRouter from "./routes";

dotenv.config();

const app = express();

app.use(json());
app.use("/api", apiRouter)

export default app;
