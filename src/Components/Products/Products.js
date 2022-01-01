import React, { useState, useEffect } from 'react'
import Product from './Product'
import Product1 from "../../Assets/product1.jpg"
import Product2 from "../../Assets/product2.jpg"
import Product3 from "../../Assets/product3.gif"
import Product4 from "../../Assets/product4.jpg"
import Product5 from "../../Assets/product5.jpg"
import Product6 from "../../Assets/product6.jpg"
import Product7 from "../../Assets/product7.jpg"
import Product8 from "../../Assets/product8.jpg"
import Product9 from "../../Assets/product9.jpg"
import Product10 from "../../Assets/product10.jpg"

const Products = () => {

  return (
    <div className="productspage">
      <h1 className="heading">our <span>products</span></h1>
       <Product
        title="Coffee Mugs"
        id="1"
        discount="22%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product1}
        price="99"
        price_before_discount="110"
      />
{/*

      <Product
        title="Cross"
        id="2"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product2}
        price="99"
        price_before_discount="100"
      />

      <Product
        title="Glowing Mask"
        id="3"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product3}
        price="99"
        price_before_discount="100"
      />

      <Product
        title="Scary cosutme"
        id="4"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product4}
        price="99"
        price_before_discount="100"
      />
      <Product
        title="Spyderman Coustume"
        id="5"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product5}
        price="99"
        price_before_discount="100"
      />
      <Product
        title="Fancy lights"
        id="6"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product6}
        price="99"
        price_before_discount="100"
      />
      <Product
        title="Pumpkin lights"
        id="7"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product7}
        price="99"
        price_before_discount="100"
      />

      <Product
        title="Face mask"
        id="8"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product8}
        price="99"
        price_before_discount="100"
      />
      <Product
        title="Tasty candy"
        id="9"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product9}
        price="99"
        price_before_discount="100"
      />
      <Product
        title="Scary Mask"
        id="10"
        discount="12%"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui minus alias odit expedita quisquam in autem, nulla inventore enim tenetur magnam. Excepturi commodi repellendus recusandae distinctio alias quo! Harum."
        image={Product10}
        price="99"
        price_before_discount="100"
      /> */}


    </div>
  )
}
export default Products
