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
