import React from 'react'

export default function Greeting() {
    
    const name = "Aryan Vekariya"
    const currentDate = new Date().toLocaleDateString();
    return (
    <>
      <h2 style={{color:"blue"}}> Hello, {name} </h2>
      <p style={{color:"red"}}> Date: {currentDate}</p>
    </>
  )
}
