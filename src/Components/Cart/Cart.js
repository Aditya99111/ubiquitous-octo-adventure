import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import "./cart.css";
const Cart = ({
  cart ,
  handleUpdateCartQty,
  handleRemoveFromCart
        }) => {
  const Emptycart = () => (
    <div className="empty_cart">
      <h1 className="heading">you have no items in your cart</h1>
      <h1 className="heading"><Link to="/products">start adding some!</Link>  </h1>

    </div>
  );

  const Filledcart = () => (
    <div className="filled_cart">
      <div className="filled_cart_container">
      <table>
      <tr>
                <th>Product</th>
                <th className="qty">Quantity</th>
                <th>Subtotal</th>
              </tr>
      </table>
        {cart.line_items.map((item) => (
          <div className="cart_item" key={item.id}>
            <table>
              <tr>
                <td>
                  <div className="cart_info">
                    <img src={item.image.url} alt="" />
                    <div>
                      <p>{item.name}</p>
                      <small>price: {item.price.formatted_with_symbol}</small>
                      <br />
                      <button onClick={()=> handleRemoveFromCart(item.id)}>remove</button>
                    </div>
                  </div>
                </td>
                <td className="cart_item_quantity">
                  <button className="btn" onClick={() => handleUpdateCartQty( item.id, item.quantity +1)}>+</button>
                  <p>{item.quantity}</p>
                  <button className="btn" onClick={() => handleUpdateCartQty(item.id, item.quantity -1)}>-</button>
                </td>
                <td>${item.quantity*item.price.formatted}.00</td>
              </tr>
            </table>
          </div>
        ))}
        
        <div className="total_price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>{cart.subtotal.formatted_with_symbol}</td>
            </tr>
            <tr>
              <td>Shiping</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{cart.subtotal.formatted_with_symbol}</td>
            </tr>

            <Link to="/checkout"><button className="btn">Checkout</button></Link>
          </table>
        </div>
      </div>
    </div>
  );

  if (!cart.line_items)
    return <h1 className="heading">Loading... please wait</h1>;

  return (
    <div className="cart">
      <h1 className="heading">
        your<span> cart</span>
      </h1>
      {!cart.line_items.length ? <Emptycart /> : <Filledcart />}
      <ToastContainer />
    </div>
  );
};
export default Cart;
