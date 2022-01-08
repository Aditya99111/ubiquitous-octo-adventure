import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
const Header = ({totalitems}) => {
    return (
        <header className="header">
        
        <a href="#" className="logo">
            <i className="fas fa-ghost"></i>
            logo
        </a>

        <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#products">top picks</a>
            <a href="#about">About</a>
            <a href="/Products">Products</a>
            <a href="#arrivals">arrivals</a>
            <a href="#contact">contact</a>
        </nav>

        <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <Link to="/Cart" className="fas fa-shopping-cart"><span className="cart_quantity">{totalitems}</span></Link>
            <a href="#" className="fas fa-user"></a>
        </div>

        <form action="" className="search-form">
            <input type="search" placeholder="search here.." id="input-box"/>
            <label htmlFor="input-box" className="fas fa-search"></label>
        </form>
    </header> 
 
    )
}

export default Header
