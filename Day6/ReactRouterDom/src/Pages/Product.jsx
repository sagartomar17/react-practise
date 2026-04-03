import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Welcome to product component</h1>
      <div>
        <h2>Products pages</h2>
        <nav>
          <Link to="phones">Phones</Link>
          <Link to="camera">Camera</Link>
          <Link to="laptops">Laptops</Link>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}

export default Product