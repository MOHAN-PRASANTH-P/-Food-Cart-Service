// import { Order } from "../models/Order.js";

// export const createOrder = async (req, res) => {
//   try {
//     const { userId, items, total } = req.body;

//     if (!userId || !items || !total) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const newOrder = new Order({ userId, items, total });
//     await newOrder.save();

//     res.status(201).json({
//       success: true,
//       message: "Order confirmed successfully!",
//       order: newOrder,
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };


import { Order } from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { tableNumber, items, total } = req.body; // replaced userId

    if (!tableNumber || !items || !total) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({ tableNumber, items, total }); // replaced userId
    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order confirmed successfully!",
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
