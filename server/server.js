import cors from "cors";
import express from "express";
import { connectDB } from "./db/database.js";
import ProductRoute from "./routes/products.routes.js";
import dotenv from "dotenv";
dotenv.config();

//crate app
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
//product route
app.use("/api/products", ProductRoute);
//defulte route
app.get("/", (req, res) => {
  res.send("server is readey to use");
});

//start server
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
