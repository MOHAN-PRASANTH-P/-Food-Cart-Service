import React, { useContext } from "react";
import "./Product.css";
import { cartContext } from "../App";

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  const cartItem = cart.find((c) => c.id === product.id);

  const addToCart = () => {
    setCart([...cart, { ...product, qty: 1 }]);
  };

  const increaseQty = () => {
    setCart(
      cart.map((c) =>
        c.id === product.id ? { ...c, qty: c.qty + 1 } : c
      )
    );
  };

  const decreaseQty = () => {
    if (cartItem.qty === 1) {
      setCart(cart.filter((c) => c.id !== product.id));
    } else {
      setCart(
        cart.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty - 1 } : c
        )
      );
    }
  };

  return (
    <div className="Product-Items">
      <img src={product.pic} alt={product.name} />

      <h3>{product.name}</h3>
      <p>₹{product.amt}</p>

      {cartItem ? (
        <div className="qty-box">
          <button onClick={decreaseQty}>−</button>
          <span>{cartItem.qty}</span>
          <button onClick={increaseQty}>+</button>
        </div>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};
