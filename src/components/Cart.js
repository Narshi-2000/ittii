import React,{useEffect, useContext} from 'react'
import Footer from './Footer'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import orderContext from '../context/OrderContext';

export default function Cart() {

  const {orders, getOrders, total} = useContext(orderContext);

  const getCartProducts =async()=>{
    getOrders();
  }

  useEffect(()=>{
    getCartProducts();

    // eslint-disable-next-line 
  },[])


  return (
    <div>
      <div className="cart">
        <div className="cart-details">
        <table>
          <thead>
            <tr id="heading">
                <th>Remove</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
            </tr>
          </thead>
            <tbody>
            {orders.map((order)=>{
              return(
                <CartItem key={order._id} id={order._id} image={order.image} title={order.title} price={order.price} />
              )
            })}
            </tbody>
            
        </table>
        </div>
      </div>

      <div className="cart-totals">
            <h1>Cart Totals</h1>
            <div className="totals">
              <table>
                <tr>
                  <td>Cart Subtotal</td>
                  <td>$<span id="subtotal">{total}</span></td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$<span id="shipping">0</span></td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th>$<span id="total">{total}</span></th>
                </tr>
              </table>
            </div>
            {total==0?<div style={{textAlign:"center", fontSize:18}}>Add items to the cart</div>:<Link type="button" to="/checkout" ><button>Proceed to checkout</button></Link>}
      </div>
      <Footer />
    </div>
  )
}
