import React, { useContext } from 'react'
import alertContext from '../context/AlertContext';
import orderContext from '../context/OrderContext';

export default function CartItem(props) {
    const {id, image, title, price} = props;
    const context = useContext(alertContext);
    const {showAlert} = context;
    const {deleteOrder} =useContext(orderContext);

    const handleDelete =() =>{
        deleteOrder(id, price);
        showAlert(" One Item deleted from the cart", "danger");
    }
  return (
       <tr>
        <td><i className="fa-solid fa-trash" style={{fontSize:25, color:'red', cursor:'pointer'}} onClick = {handleDelete}></i></td>
        <td><img src={image} alt=""></img></td>
        <td>{title}</td>
        <td>${price}</td>       
    </tr>
  )
}
