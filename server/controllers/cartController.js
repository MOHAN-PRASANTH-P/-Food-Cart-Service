// import { Cart } from "../models/Cart.js";

// export const saveCart = async (req, res) => {
//   try {
//     const { userId, items } = req.body;
//     let cart = await Cart.findOne({ userId });
//     if (cart) {
//       cart.items = items;
//       await cart.save();
//     } else {
//       cart = new Cart({ userId, items });
//       await cart.save();
//     }
//     res.json(cart);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const getCart = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const cart = await Cart.findOne({ userId });
//     res.json(cart || { items: [] });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


import { Cart } from "../models/Cart.js";

export const saveCart = async (req, res) => {
  try {
    const { tableNumber, items } = req.body; // replaced userId
    let cart = await Cart.findOne({ tableNumber }); // replaced userId
    if (cart) {
      cart.items = items;
      await cart.save();
    } else {
      cart = new Cart({ tableNumber, items }); // replaced userId
      await cart.save();
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const { tableNumber } = req.params; // replaced userId
    const cart = await Cart.findOne({ tableNumber }); // replaced userId
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
