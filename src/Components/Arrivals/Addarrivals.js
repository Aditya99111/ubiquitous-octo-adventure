import React from 'react'
import Arrivals from './Arrivals'
import Product4 from "../../Assets/product4.jpg"
import Product5 from "../../Assets/product5.jpg"
import Product6 from "../../Assets/product6.jpg"
import Product7 from "../../Assets/product7.jpg"
import Product8 from "../../Assets/product8.jpg"
import Product9 from "../../Assets/product9.jpg"

const Addarrivals = () => {
    return (
        <section className="arrivals" id="arrivals">
            <h1 className="heading">new <span>arrivals</span></h1>
            <div className="box-container">

                <Arrivals 
                    name="Scary cosutme"
                    imageurl={Product4}
                    product_id="/products#4"
                    price_after_discount="99.99"
                    price_before_discount="110.99"
                /> 
                <Arrivals 
                    name="Spyderman Coustume"
                    imageurl={Product5}
                    product_id="/products#5"
                    price_after_discount="99.99"
                    price_before_discount="110.99"
                />
                 <Arrivals 
                    name="Fancy lights"
                    imageurl={Product6}
                    product_id="/products#6"
                    price_after_discount="99.99"
                    price_before_discount="110.99"
                />
                 <Arrivals 
                    name="Pumpkin lights"
                    imageurl={Product7}
                    product_id="/products#7"
                    price_after_discount="99.99"
                    price_before_discount="110.99"
                />
                 <Arrivals 
                    name="Face mask"
                    imageurl={Product8}
                    product_id="/products#8"
                    price_after_discount="99.99"
                    price_before_discount="110.99"
                />
                 <Arrivals 
                    name="Tasty candy"
                    imageurl={Product9}
                    product_id="/products#9"
                    price_after_discount="99.99"
                    price_before_discount="110.99"
                />


            </div>
        </section>

    )
}

export default Addarrivals
