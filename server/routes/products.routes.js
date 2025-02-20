import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product.controllers.js";
const router = express.Router();
//route to add product
router.post("/createproduct", addProduct);
router.get("/getallproduct", getAllProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

export default router;
