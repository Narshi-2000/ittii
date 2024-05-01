import React from 'react';
import '../App.css';

export default function UserItem(props) {
    const {title, image, price, date}=props;
    const d = new Date(date);
  return (    
      <tr>
        <td>{title}</td>
        <td><img src={image} alt=""></img></td>
        <td>$ {price}</td>
        <td>{d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()}</td>       
    </tr>
    
  )
}
