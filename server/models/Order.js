// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     userId: { type: String, required: true },
//     items: [
//       {
//         productId: String,
//         name: String,
//         price: Number,
//         quantity: Number,
//       },
//     ],
//     total: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// export const Order = mongoose.model("Order", orderSchema);


import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    tableNumber: { type: String, required: true }, // replaced userId
    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
