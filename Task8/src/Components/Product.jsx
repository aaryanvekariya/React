import React from 'react'

export default function Product(props) {
  return (
    <>
      <h2 style={{color:"green"}}>Product: {props.product.name}</h2>
      <p style={{color:"red"}}>Price: {props.product.price}</p>
    </>
  )
}
