import mongoose from "mongoose";
//product model/schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //cratedAT and updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
