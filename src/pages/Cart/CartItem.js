import React from 'react'

export default function CartItem({itemData}) {
  return (
      <>
    <div>CartItem</div>
    <img src={itemData.image} alt={itemData.title} />
    <h2>{itemData.title}</h2>
    <p>{itemData.price}</p>
    <input type="number" id="qty" value={itemData.qty}  />
    </>
  )
}
