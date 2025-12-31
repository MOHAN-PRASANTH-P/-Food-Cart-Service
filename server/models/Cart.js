// import mongoose from "mongoose";

// const cartSchema = new mongoose.Schema({
//   productId: String,
//   name: String,
//   price: Number,
//   quantity: Number,
//   userId: String,
// });

// export const Cart = mongoose.model("Cart", cartSchema);
// export default Cart; // ✅ Add this line


import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true }, // replaced userId
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

export const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
