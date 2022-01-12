import React from 'react'
import Arrivals from './Arrivals'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addarrivals = ({ products, OnAddToCart }) => {
    return (
        <section className="arrivals" id="arrivals">
            <h1 className="heading">new <span>arrivals</span></h1>
            <div className="box-container">
                {products.slice(0, 6).map((product) => {
                    return (
                        <Arrivals
                            name={product.name}
                            id={product.id}
                            imageurl={product.image.url}
                            price_after_discount={product.price.raw}
                            price_before_discount="110"
                        />
                    );
                })}
            </div>
            <ToastContainer />
        </section>

    )
}

export default Addarrivals
