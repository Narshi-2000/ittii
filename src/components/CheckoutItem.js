import React from 'react'

export default function CheckoutItem(props) {
    const {title, price} = props;
  return (
      <tr>
        <td>{title}</td>
        <td style={{marginRight:2}}>${price}</td>
      </tr>
  )
}
