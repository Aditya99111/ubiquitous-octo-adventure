import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Header = ({totalitems}) => {
    return (
        <header className="header">
        
        <a href className="logo">
            <i className="fas fa-ghost"></i>
            logo
        </a>

        <nav className="navbar">
            <HashLink to="/#home" className="active">Home</HashLink>
            <HashLink to="/#hot">top picks</HashLink>
            <HashLink to="/#about">About</HashLink>
            <HashLink to="/Products">Products</HashLink>
            <HashLink to="/#arrivals">arrivals</HashLink>
            <HashLink to="/#contact">contact</HashLink>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

        <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <Link to="/Cart" className="fas fa-shopping-cart"><span className="cart_quantity">{totalitems}</span></Link>
            <a href className="fas fa-user"></a>
        </div>

    </header> 
 
    )
}

export default Header
