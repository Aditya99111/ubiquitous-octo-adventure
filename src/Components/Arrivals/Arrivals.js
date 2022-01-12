import React from 'react'
import "./arrivals.css"
import { HashLink as Link } from 'react-router-hash-link';

const Arrivals = (props) => {
    return (
        <Link to="#_">
            <div className="box">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
                <div className="image">
                    <img src={props.imageurl} alt="" />
                </div>
                <div className="content">
                    <h3>{props.name}</h3>
                    <div className="price">${props.price_after_discount}<span> ${props.price_before_discount}</span></div>
                </div>
            </div>
        </Link>
    )
}

export default Arrivals
