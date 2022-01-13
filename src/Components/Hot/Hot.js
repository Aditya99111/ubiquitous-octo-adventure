import React from 'react'
import "./hot.css"
import { HashLink as Link } from 'react-router-hash-link';
const Hot = (props) => {
    return (
        <div>
            <Link to={`/products/#${props.id}`}>
                <div className="box">
                    <div className="icons">
                        <a onClick={() => props.OnAddToCart(props.id, 1)} className="fas fa-shopping-cart"></a>
                        <a href={`/products/#${props.id}`} className="fas fa-eye"></a>
                        <a href="#" className="fas fa-share"></a>
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
