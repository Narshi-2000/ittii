import React, { useContext } from "react";
import "../App.css";
import CheckoutItem from "./CheckoutItem";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/AlertContext";
import orderContext from "../context/OrderContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { showAlert } = useContext(alertContext);
  const { orders, deleteAll, total, addUserOrder} = useContext(orderContext);

  const orderPlaced = async() => {
    for(let i=0;i<orders.length;i++){
      await addUserOrder(orders[i].id, orders[i].title, orders[i].image, orders[i].price);
    }

    deleteAll();
    
    showAlert("Successfully placed the order", "success");
    navigate("/");
  };

  return (
    <div>
      <div className="checkout-div">
        <div className="billing-details">
          <h1>Checkout</h1>
          <h3>Billing Details</h3>
          <form>
            <div className="name">
              <div className="first-name">
                <label htmlFor="first-name">First Name</label>
                <input name="first-name" type="text" />
              </div>
              <div className="last-name">
                <label htmlFor="last-name">Last Name</label>
                <input name="last-name" type="text" />
              </div>
            </div>
            <label htmlFor="country">Country</label>
            <input name="country" type="text" />
            <label htmlFor="street">Street address</label>
            <input name="street" type="text" />
            <label htmlFor="city">Town/City</label>
            <input name="city" type="text" />
            <label htmlFor="zip">ZIP</label>
            <input name="zip" type="text" />
            <label htmlFor="phone">Phone</label>
            <input name="phone" type="text" />
            <label htmlFor="email">Email Address</label>
            <input name="email" type="email" />
          </form>
        </div>
        <div className="card-details">
          <h1>Your Order</h1>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <CheckoutItem
                    id={order._id}
                    title={order.title}
                    price={order.price}
                  />
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <span style={{ fontWeight: 750 }}>Total</span>
                </td>
                <td>
                  <span style={{ fontWeight: 750 }}>$ {total}</span>
                </td>
              </tr>
            </tfoot>
          </table>

          <button onClick={orderPlaced}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
