import React from 'react'
import { Home, About,  Contact, Footer } from "./Components"
import AddHot from './Components/Hot/AddHot';
import Addarrivals from './Components/Arrivals/Addarrivals';
const Landing = ({ products, OnAddToCart }) => {
    return (
        <div>
            <Home />
            <AddHot  products={products} OnAddToCart={OnAddToCart} />
            <About />
            <Addarrivals products={products} OnAddToCart={OnAddToCart}/>
            <Contact subheading="Tell us something!"/>
            <Footer />
        </div>
    )
}

export default Landing
