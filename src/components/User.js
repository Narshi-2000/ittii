import React, { useContext, useEffect } from 'react';
import orderContext from '../context/OrderContext';
import '../App.css';
import UserItem from './UserItem';

export default function User() {
    const {userOrders, getUserOrders} = useContext(orderContext);

    useEffect(()=>{
        getUserOrders();

        // eslint-disable-next-line
    },[]);
  return (
    <div>
      <div className="cart">
        <div className="cart-details">
        <table>
          <thead>
            <tr id="heading">
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Date of Purchase</th>
            </tr>
          </thead>
            <tbody>
            {userOrders.map((order)=>{
              return(
                <UserItem key={order._id} id={order._id} image={order.image} title={order.title} price={order.price} date={order.date}/>
              )
            })}
            </tbody>
            
        </table>
        </div>
      </div>
    </div>
  )
}
