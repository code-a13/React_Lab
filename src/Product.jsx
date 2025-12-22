// src/Product.jsx
import React from 'react';

function Product({ name, price, onAddToCart }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;