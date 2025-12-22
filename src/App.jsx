// src/App.jsx
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="App">
      <h1>Welcome to My eCommerce Store</h1>
      <div className="products">
        <Product name="Laptop" price="$1200" onAddToCart={handleAddToCart} />
        <Product name="Smartphone" price="$800" onAddToCart={handleAddToCart} />
      </div>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;