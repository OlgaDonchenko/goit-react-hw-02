import React from "react";
export default function Feedback({ good, bad, neutral, positivePercent }) {
  const total = good + bad + neutral;

  return (
    <>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral:{neutral}</p>
      <p>Total:{total}</p>
      <p>
        Positive: {positivePercent}
        {String.fromCharCode(37)}
      </p>
    </>
  );
}
