import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = ({ totalitems }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="header">
      <a href className="logo">
        <i className="fas fa-ghost"></i>
        logo
      </a>

      <nav className="navbar">
        <HashLink to="/#home" className="active">
          Home
        </HashLink>
        <HashLink to="/#hot">top picks</HashLink>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/Products">Products</HashLink>
        <HashLink to="/#arrivals">arrivals</HashLink>
        <HashLink to="/#contact">contact</HashLink>
      </nav>

      <div className="icons">
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={toggleHamburger}
        ></div>
        <div id="search-btn" className="fas fa-search"></div>
        <Link to="/Cart" className="fas fa-shopping-cart">
          <span className="cart_quantity">{totalitems}</span>
        </Link>
        <a href className="fas fa-user"></a>
      </div>

      <div
        className="navigation"
        style={{ display: hamburgerOpen ? "inline" : "none" }}
      >
        <HashLink to="/#home" className="active" style={{ fontSize: "17px",marginRight: "5px" }}>
          Home
        </HashLink>

        <HashLink to="/#hot" style={{ fontSize: "17px",marginRight: "5px" }}>top picks</HashLink>
        <HashLink to="/#about" style={{ fontSize: "17px",marginRight: "5px" }}>About</HashLink>
        <HashLink to="/Products" style={{ fontSize: "17px",marginRight: "5px" }}>Products</HashLink>
        <HashLink to="/#arrivals" style={{ fontSize: "17px",marginRight: "5px" }}>arrivals</HashLink>
        <HashLink to="/#contact" style={{ fontSize: "17px",marginRight: "5px" }}>contact</HashLink>
      </div>
    </header>
  );
};

export default Header;
