import React from "react";
import Product from "./Product";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = ({ products ,OnAddToCart,totalitems}) => {
  return (
    <>
    <div className="productspage">
      <h1 className="heading">
        our <span>products</span>
      </h1>

      {products.map((product) => {
        return (
          <Product
            products={products}
            OnAddToCart={OnAddToCart}
            title={product.name}
            id={product.id}
            discount="22%"
            desc={product.description.replace(/(<([^>]+)>)/gi, "")}
            image={product.image.url}
            price={product.price.raw}
            price_before_discount="110"
          />
        );
      })}
    </div>
    <ToastContainer />
    </>
  );
};
export default Products;
