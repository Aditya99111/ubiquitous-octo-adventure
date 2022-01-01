import React from 'react'
import Hot from "./Hot"
import Product1 from "../../Assets/product1.jpg"
import Product2 from "../../Assets/product2.jpg"
import Product3 from "../../Assets/product3.gif"
import "./hot.css"
const AddHot = () => {
    return (

        <section className="products" id="products">
            <h1 className="heading"><span>Hot</span> Deals!</h1>
            <div className="box-container">
                <Hot
                    name="Coffee Mugs"
                    imageurl={Product1}
                    productid="products/#1"
                    price_before_discount="99.99"
                    price_after_discount="79.00"
                />

                <Hot
                    name="Cross"
                    imageurl={Product2}
                    productid="products/#2"
                    price_before_discount="99.99"
                    price_after_discount="79.00"
                />

                <Hot
                    name="Glowing Mask"
                    imageurl={Product3}
                    productid="products/#3"
                    price_before_discount="99.99"
                    price_after_discount="79.00"
                />
                

            </div>
        </section>


    )
}

export default AddHot
