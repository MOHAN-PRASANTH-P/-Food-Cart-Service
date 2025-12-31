import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  shop: String,
  ftype: String,
  pic: String
});

export const Product = mongoose.model("Product", productSchema);