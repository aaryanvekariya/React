import React from "react";

export default function JSXRules() {
  let rules = [
    "JSX must return a single parent element.",
    "JSX elements must be properly closed.",
    "JSX attributes use camelCase (e.g., className)",
  ];

  return (
    <>
      <h1>JSX Rules</h1>
      <ul>
        {rules.map((rule) => (
          <li>{rule}</li> 
        ))}
      </ul>
    </>
  );
}