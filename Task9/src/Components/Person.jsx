import React from "react";

export default function Person({person}) {
  return (
    <>
      <h2>Hello, {person.name}</h2>
      <p>Age: {person.age}</p>
    </>
  );
}
