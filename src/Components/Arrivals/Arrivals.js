import React from 'react'
import "./arrivals.css"
import { HashLink } from 'react-router-hash-link';

const Arrivals = (props) => {
    return (
        <HashLink to={`/products/#${props.id}`}>
            <div className="box">
                <div className="icons">
                    <HashLink to="#_" onClick={() => props.OnAddToCart(props.id, 1)} href="#_" className="fas fa-shopping-cart"></HashLink>
                    <HashLink to={`/products/#${props.id}`} className="fas fa-eye"></HashLink>
                    <HashLink to="#_" href className="fas fa-share"></HashLink>
                </div>
                <div className="image">
                    <img src={props.imageurl} alt="" />
                </div>
                <div className="content">
                    <h3>{props.name}</h3>
                    <div className="price">${props.price_after_discount}<span> ${props.price_before_discount}</span></div>
                </div>
            </div>
        </HashLink>
    )
}

export default Arrivals
