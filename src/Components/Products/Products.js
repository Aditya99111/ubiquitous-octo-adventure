import React from "react";
import Product from "./Product";
import Product1 from "../../Assets/product1.jpg";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="productspage">
      <h1 className="heading">
        our <span>products</span>
      </h1>
      {products.map((product) => {
        return (
          <Product
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
  );
};
export default Products;
