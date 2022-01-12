import React, { useState, useEffect } from "react";
import "./App.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Cart from "./Components/Cart/Cart";
import AboutPage from "./Components/About/AboutPage";
import { commerce } from "./lib/commerce";
import Products from "./Components/Products/Products";
import { Header } from "./Components";
import Checkout from "./Components/Checkout/Checkout"
function App() {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage , setErrorMessage] = useState('')
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setproducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
    toast.success('🦄 Successfully Added to cart!', {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const handleUpdateCartQty = async (productId , quantity)=>{
    const {cart} = await commerce.cart.update(productId , {quantity});
    setCart(cart);
    toast.success('🦄 Successfully updated the cart!', {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const handleRemoveFromCart = async (productId) =>{
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
    toast.info('🦄 You removed a item from cart!', {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const refreshCart = async () =>{
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }
  const handleCaptureCheckout = async (checkoutTokenId , newOrder)=>{
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId , newOrder);
      setOrder( incomingOrder);
      refreshCart();
    } catch (error){
      setErrorMessage(error.data.error.message)

    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Router>
    <Header totalitems={cart.total_items}/>
        <Route exact path="/">
          <Landing  products={products} OnAddToCart={handleAddToCart} />
        </Route>  
        <Route exact path="/cart" >
          <Cart
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          />
        </Route> 
        <Route exact path="/checkout" >
          <Checkout 
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errorMessage}
          />
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
