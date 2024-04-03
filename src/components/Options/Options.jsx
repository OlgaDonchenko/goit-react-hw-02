import React from "react";
export default function Options({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}> Bad</button>
    </>
  );
}
