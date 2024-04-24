import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import user from "../../assets/Images/user.png";
import logo from "../../assets/Images/logo.png";
import search from "../../assets/Images/search-interface-symbol.png";
const Navbar = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="logo" />

      <div className="menu-items">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/about">
          About
        </Link>
        <Link className="item" to="/service">
          Our Services
        </Link>
        <Link className="item" to="/blog">
          Blog
        </Link>
        <Link className="item" to="/gallery">
          Gallery
        </Link>
        <Link className="item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="user">
        <img src={search} alt="search icon" />
        <img src={user} alt="user icon" />
      </div>
    </div>
  );
};

export default Navbar;
