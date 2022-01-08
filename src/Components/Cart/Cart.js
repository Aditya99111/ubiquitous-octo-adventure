import React from "react";
import "./cart.css";
const Cart = (props) => {
  console.log(props.cart);
  const Emptycart = () => (
    <div className="empty_cart">
      <h1 className="heading">you have no items in your cart</h1>
    </div>
  );

  const Filledcart = () => (
    <div className="filled_cart">
      <div className="filled_cart_container">
        {props.cart.line_items.map((item) => (
          <div className="cart_item" key={item.id}>
            <table>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              <tr>
                <td>
                  <div className="cart_info">
                    <img src={item.image.url} alt="" />
                    <div>
                      <p>{item.name}</p>
                      <small>price: {item.price.formatted_with_symbol}</small>
                      <br />
                      <a href="#">remove</a>
                    </div>
                  </div>
                </td>
                <td>
                  <button className="btn">+</button>
                  <p>{item.quantity}</p>
                  <button className="btn">-</button>
                </td>
                <td>$50.00</td>
              </tr>
            </table>
          </div>
        ))}
        ;
        <div className="total_price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>{props.cart.subtotal.formatted_with_symbol}</td>
            </tr>
            <tr>
              <td>Shiping</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$230.00</td>
            </tr>

            <button className="btn">Checkout</button>
          </table>
        </div>
      </div>
    </div>
  );

  if (!props.cart.line_items)
    return <h1 className="heading">Loading... please wait</h1>;

  return (
    <div className="cart">
      <h1 className="heading">
        your<span> cart</span>
      </h1>
      {!props.cart.line_items.length ? <Emptycart /> : <Filledcart />}
    </div>
  );
};
export default Cart;
