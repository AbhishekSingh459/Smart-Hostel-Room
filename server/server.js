import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", roomRoutes);

mongoose.connect(process.env.MONGO_URI).then(() =>
  console.log("MongoDB Connected")
);

app.listen(process.env.PORT, () =>
  console.log("Server running on port", process.env.PORT)
);
