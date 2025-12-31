import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// ✅ Add to cart
router.post("/add", async (req, res) => {
  try {
    const { productId, name, price, quantity, userId } = req.body;

    // Check if the item already exists for this user
    const existingItem = await Cart.findOne({ productId, userId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const cartItem = new Cart({ productId, name, price, quantity, userId });
    await cartItem.save();

    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get user's cart
router.get("/:userId", async (req, res) => {
  try {
    const items = await Cart.find({ userId: req.params.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Remove item from cart
router.delete("/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    await Cart.findOneAndDelete({ userId, productId });
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; // ✅ Default export for ESM compatibility
