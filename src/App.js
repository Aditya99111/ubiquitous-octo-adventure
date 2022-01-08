import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Cart from "./Components/Cart/Cart";
import AboutPage from "./Components/About/AboutPage";
import { commerce } from "./lib/commerce";
import Products from "./Components/Products/Products";
import { Header } from "./Components";
function App() {
  const [products, setproducts] = useState([]);

  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setproducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    console.log(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Router>
    <Header totalitems={cart.total_items}/>
        <Route exact path="/">
          <Landing />
        </Route>  
        <Route exact path="/cart" >
          <Cart cart={cart}/>
        </Route>  
        <Route exact path="/products">
          <Products totalitems={cart.total_items} products={products} OnAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
