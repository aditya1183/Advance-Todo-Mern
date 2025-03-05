import express from "express";
import mongoose from "mongoose";
import connectdb from "./Config/db.js";
import  UserRoutes  from "./Routes/user.routes.js";

import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend communication
connectdb();
app.use("/api/v1/auth", UserRoutes);
app.use("/api/v1/" , UserRoutes);

const PORT = process.env.PORT || 5000;
app.listen(3000, () => {
  console.log(`🚀 Server running on port ${3000}`);
});
