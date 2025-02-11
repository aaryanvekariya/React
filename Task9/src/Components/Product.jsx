import React from 'react'

export default function Product({product}) {
  return (
    <>
      <h2>Product: {product.name}</h2>
      <p>Price: {product.price}</p>
    </>
  )
}
