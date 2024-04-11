import React from "react";
import css from "./Option.module.css";
export default function Options({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onReset,
  totalFeedback,
}) {
  return (
    <div className={css.list}>
      <button className={css.btn} onClick={onGoodClick}>
        Good
      </button>
      <button className={css.btn} onClick={onNeutralClick}>
        Neutral
      </button>
      <button className={css.btn} onClick={onBadClick}>
        {" "}
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
