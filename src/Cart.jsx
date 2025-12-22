// src/Cart.jsx
import React from 'react';

function Cart({ items }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {items}</p>
    </div>
  );
}

export default Cart;