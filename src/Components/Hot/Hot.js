import React from 'react'
import "./hot.css"
import { HashLink as Link } from 'react-router-hash-link';
const Hot = (props) => {
    return (
        <div>
            <Link to={`/products/#${props.id}`}>
                <div className="box">
                    <div className="icons">
                    <Link to="#_" onClick={() => props.OnAddToCart(props.id, 1)} href="#_" className="fas fa-shopping-cart"></Link>
                    <Link to={`/products/#${props.id}`} className="fas fa-eye"></Link>
                    <Link to="#_" className="fas fa-share"></Link>
                    </div>
                    <div className="image">
                        <img src={props.imageurl} alt="" />
                    </div>
                    <div className="content">
                        <h3>{props.name}</h3>
                        <div className="price">${props.price_after_discount} <span>${props.price_before_discount} </span></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Hot
