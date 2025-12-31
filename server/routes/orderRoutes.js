// import express from "express";
// import { createOrder } from "../controllers/orderController.js";
// const router = express.Router();

// router.post("/create", createOrder);

// export default router;


// routes/orderRoutes.js
import express from "express";
import { createOrder } from "../controllers/orderController.js"; // ✅ Path must be correct!

const router = express.Router();

router.post("/create", createOrder);

export default router;
