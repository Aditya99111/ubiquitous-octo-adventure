import React from 'react'
import Hot from "./Hot"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./hot.css"
const AddHot = ({products, OnAddToCart}) => {
    return (

        <section className="products" id="hot">
            <h1 className="heading"><span>Hot</span> Deals!</h1>
            <div className="box-container">
            {products.slice(0,3).map((product) => {
        return (
          <Hot
          OnAddToCart={OnAddToCart}
            name={product.name}
            id={product.id}
            imageurl={product.image.url}
            price_after_discount={product.price.raw}
            price_before_discount="110"
          />
        );
      })}

                                

            </div>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        </section>


    )
}

export default AddHot
