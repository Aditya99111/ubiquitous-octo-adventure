import React, { useState } from "react";
import "./Header.css";
import { Link ,useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = ({ totalitems }) => {
  const location = useLocation()
  console.log(location)
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-ghost"></i>
        logo
      </Link>

      <nav className="navbar">
        <HashLink to="/#home" className={location.hash === `#home` ? "active" : ""}>
          Home
        </HashLink>
        <HashLink className={location.hash === `#hot` ? "active" : ""} to="/#hot">top picks</HashLink>
        <HashLink className={location.hash === `#about` ? "active" : ""} to="/#about">About</HashLink>
        <HashLink className={location.pathname === `/Products` ? "active" : ""} to="/Products">Products</HashLink>
        <HashLink className={location.hash === `#arrivals` ? "active" : ""} to="/#arrivals">arrivals</HashLink>
        <HashLink className={location.hash === `#contact` ? "active" : ""} to="/#contact">contact</HashLink>
      </nav>

      <div className="icons">
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={toggleHamburger}
        ></div>
        <Link to="/products" className="fas fa-home"></Link>
        <Link to="/support" className="fas fa-copy"></Link>
        <Link to="/Cart" className="fas fa-shopping-cart">
          <span className="cart_quantity">{totalitems}</span>
        </Link>
      </div>

      <div
        className="navigation"
        style={{ display: hamburgerOpen ? "inline" : "none" }}
      >
      <div className="headerstyling">
        <HashLink to="/#home" className="active" style={{ fontSize: "17px",marginRight: "5px" }}>
          Home
        </HashLink>

        <HashLink to="/#hot" style={{ fontSize: "17px",marginRight: "5px" }}>top picks</HashLink>
        <HashLink to="/#about" style={{ fontSize: "17px",marginRight: "5px" }}>About</HashLink>
        <HashLink to="/Products" style={{ fontSize: "17px",marginRight: "5px" }}>Products</HashLink>
        <HashLink to="/#arrivals" style={{ fontSize: "17px",marginRight: "5px" }}>arrivals</HashLink>
        <HashLink to="/#contact" style={{ fontSize: "17px",marginRight: "5px" }}>contact</HashLink>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
