import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>My shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout