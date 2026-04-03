import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "6px",
          marginBottom: "10px",
        }}
      >
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
            backgroundColor: isActive ? "pink" : "transparent",
            padding: "5px 5px",
            margin: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
            backgroundColor: isActive ? "pink" : "transparent",
            padding: "5px 5px",
            margin: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"about"}
        >
          About Us
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
            backgroundColor: isActive ? "pink" : "transparent",
            padding: "5px 5px",
            margin: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/contact"}
        >
          Contact Us
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
            backgroundColor: isActive ? "pink" : "transparent",
            padding: "5px 5px",
            margin: "10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/user"}
        >
          User
        </NavLink>
      </div>
    </>
  );
}

export default Navbar