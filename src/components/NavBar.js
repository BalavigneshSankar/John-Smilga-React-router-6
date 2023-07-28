import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* to="/..." means absolute, to="..." means relative */}
      <Link to="">Home</Link>
      <Link to="about">About</Link>
      <Link to="products">Products</Link>
    </nav>
  );
};

export default NavBar;
