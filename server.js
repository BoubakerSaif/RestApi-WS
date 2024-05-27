import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./Routes/todoRoutes.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URL);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", todoRoutes);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
