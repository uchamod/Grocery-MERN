import mongoose from "mongoose";
import Product from "../model/product.js";
//add new product
export const addProduct = async (req, res) => {
  const product = req.body; //this data send by the user
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ sucsuss: false, massage: "please enter all data" });
  }
  //new product
  const newProduct = new Product(product);
  try {
    //store in db
    await newProduct.save();
    return res
      .status(201)
      .json({ sucsuss: true, massage: "new product added succsussfuly" });
  } catch (err) {
    console.log("Error while creating product", err.massage);
    return res
      .status(500)
      .json({ sucsuss: false, massage: "Internel server error" });
  }
};

//get all products
export const getAllProduct = async (req, res) => {
  try {
    //fetch products
    const products = await Product.find({});
    return res.status(200).json({
      sucsuss: true,
      massage: "data fetched succsussfuly",
      body: products,
    });
  } catch (err) {
    console.log("Error while getting product", err.massage);
    return res
      .status(500)
      .json({ sucsuss: false, massage: "Internel server error" });
  }
};
//update all products
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  //check existence
  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .json({ sucsuss: false, massage: "Invallid product id" });
  }

  const product = req.body;
  try {
    //update current product
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(200).json({
      sucsuss: true,
      massage: "product updated succsussfuly",
      body: updateProduct,
    });
  } catch (err) {
    console.log("Error while updating product", err.massage);
    return res
      .status(500)
      .json({ sucsuss: false, massage: "Internel server error" });
  }
};

//delete all products
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  //check existence
  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .json({ sucsuss: false, massage: "Invallid product id" });
  }
  try {
    //delete product
    await Product.findByIdAndDelete(id);
    return res.status(200).json({
      sucsuss: true,
      massage: "product deleted succsussfuly",
    });
  } catch (err) {
    console.log("Error while deleting product", err.massage);
    return res
      .status(500)
      .json({ sucsuss: false, massage: "Internel server error" });
  }
};
