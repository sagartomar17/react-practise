import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Camera from "./Pages/Camera";
import Laptops from "./Pages/Laptops";
import Phones from "./Pages/Phones";
import Navbar from "./Components/Navbar";

const Index = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/*default child*/}
            <Route path="about" element={<About />} />

            <Route path="products" element={<Product />}>
            <Route path="laptops" element={<Laptops />} />
            <Route path="phones" element={<Phones />} />
            <Route path="camera" element={<Camera />} />
            </Route>
          </Route>
          {/* <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:slug" element={<Dynamic />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Index;
// jbb aapke pas child component hote hai react usse show nhi kra pata uske liye chaiye outlet 
