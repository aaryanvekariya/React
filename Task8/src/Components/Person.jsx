import React from "react";

export default function Person(props) {
  
  return (
    <>
      <h2 style={{color:"orange"}}>Hello, {props.person.name}</h2>
      <p style={{color:"blue"}}>Age: {props.person.age}</p>
    </>
  );
}
