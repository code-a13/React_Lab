// src/App.jsx
import React from 'react';
import { useState } from 'react';
import Product from './Product';
function App() {
  const [cart, setCart] = useState(0);
  const productList = [
    { id: 1, name: "Apple iPhone 15", price: "$999" },
    { id: 2, name: "Samsung S24", price: "$899" },
    { id: 3, name: "Google Pixel 8", price: "$799" },
    { id: 4, name: "OnePlus 12", price: "$699" }
  ];

  function handleAddToCart() {
    setCart(cart + 1); 
    console.log("Adding to cart...");
  }
 
  return (
    <div>
        <h3>Cart: {cart}</h3>
        <h2>Product List</h2>

      <div className="product-container">
        
        {productList.map((item) => (
          <Product 
            key={item.id}          
            name={item.name}       
            price={item.price}     
            onAddToCart={handleAddToCart}
            cart={cart} 
          />
        ))}
      </div>
    </div>
  );
}



export default App;