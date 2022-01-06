import React from 'react'
import "./product.css"

const Product = (props,{OnAddToCart, products}) => {
console.log(products)
    return (
        <>
            <div className="product" id={props.id} >
                <div className="product-img">
                    <img src={props.image} alt="" />
                    <span className="tag">{props.discount} off</span>
                </div>
                <div className="product-listing">
                    <div className="content">
                        <h1 className="name">{props.title}</h1>
                        <p className="info">{props.desc}</p>
                        <p className="price">${props.price} <span>${props.price_before_discount}</span></p>
                        <div className="btn-and-rating-box">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <button onClick={()=> OnAddToCart(products.id,1)} className="btn">Add to cart <i className="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
