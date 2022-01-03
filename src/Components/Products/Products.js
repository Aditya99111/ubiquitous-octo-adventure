import React from 'react'
import Product from './Product'
import Product1 from "../../Assets/product1.jpg"

const Products = ({products}) => {
console.log(products)
  return (

    <div className="productspage">
      <h1 className="heading">our <span>products</span></h1>
      
       <Product
        title="hello"
        id="1"
        discount="22%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product1}
        price="99"
        price_before_discount="110"
      />

    </div>
  )
}
export default Products
