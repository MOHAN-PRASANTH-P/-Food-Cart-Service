import React, { useEffect, useState, useContext } from "react";
import "./ViewCart.css";
import { cartContext } from "../App";
import orderSound from "../assets/order-received.mp3";

const API_URL = "https://food-cart-service-backend-dkk0.onrender.com";

export const ViewCart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [tableNumber, setTableNumber] = useState("");

  useEffect(() => {
    setTotal(cart.reduce((sum, item) => sum + item.amt * item.qty, 0));
  }, [cart]);

  useEffect(() => {
    if (orderConfirmed) {
      const audio = new Audio(orderSound);
      audio.play().catch(() => {});
    }
  }, [orderConfirmed]);

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const orderNow = async () => {
    if (!tableNumber) {
      alert("Please enter your Table Number!");
      return;
    }

    await fetch(`${API_URL}/api/order/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tableNumber,
        items: cart.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.amt,
          quantity: item.qty,
          image: item.pic,
        })),
        total,
      }),
    });

    setCart([]);
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="order-confirmed-screen">
        <h1>✅ Order Confirmed</h1>
        <p style={{ fontSize: "24px", marginTop: "20px" }}>
          From our kitchen to your heart. 🍗
        </p>
      </div>
    );
  }

  return (
    <div className="view-cart-page">
      <h1>Cart</h1>

      {cart.length > 0 && (
        <div className="table-number-container">
          <label>
            <h4>Table Number (Look at Corner of the Table):</h4>
            <input
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="eg.T01"
            />
          </label>
        </div>
      )}

      {cart.length === 0 && (
        <h3>
          <center>
            Your cart is empty
            <br />
            <br />
            “A silent cart, a loud craving 🛒”
          </center>
        </h3>
      )}

      {cart.map((product) => (
        <div className="cart-item" key={product.id}>
          <div>
            <h3>{product.name}</h3>
            <p>
              ₹{product.amt} × {product.qty} = ₹{product.amt * product.qty}
            </p>
          </div>
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2>Total: ₹{total}</h2>
          <button className="order-btn" onClick={orderNow}>
            Order Now
          </button>
        </>
      )}
    </div>
  );
};
