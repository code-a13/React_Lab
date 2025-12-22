// Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Welcome to My eCommerce Store</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
export default Header;