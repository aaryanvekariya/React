import React from "react";
import Person from "./Components/Person";
import Product from "./Components/Product";

export default function App() {
  const person = { name: "Aryan ", age: 20 };
  const product = { name: "Charger", price: "$100000" };
  return (
    <>
      <Person person={person} />
      <Product product={product} />
    </>
  );
}
