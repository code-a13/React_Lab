// src/App.jsx
import React from 'react';
import Product from './Product';
function App() {
 
  const productList = [
    { id: 1, name: "Apple iPhone 15", price: "$999" },
    { id: 2, name: "Samsung S24", price: "$899" },
    { id: 3, name: "Google Pixel 8", price: "$799" },
    { id: 4, name: "OnePlus 12", price: "$699" }
  ];

  function handleAddToCart() {
    console.log("Item added to cart!");
  }

  return (
    <div>
        <h2>Product List</h2>
      <div className="product-container">
        
        {productList.map((item) => (
          <Product 
            key={item.id}          
            name={item.name}       
            price={item.price}     
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;