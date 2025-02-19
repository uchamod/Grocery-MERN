import express from "express";
import { addProduct } from "../controllers/product.controllers.js";
const router = express.Router();
//route to add product
router.post("/createproduct", addProduct);

export default router;
