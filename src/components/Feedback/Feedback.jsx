import React from "react";
export default function Feedback({ good, bad, neutral }) {
  const total = good + bad + neutral;
  return (
    <>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral:{neutral}</p>
      <p>Total:{total}</p>
    </>
  );
}
