import { useState } from "react";

import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification ";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [reset, setShowReset] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const handleGoodClick = () => {
    setGood(good + 1);
    setShowReset(true);
    setShowNotification(false);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setShowReset(true);
    setShowNotification(false);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setShowReset(true);
    setShowNotification(false);
  };
  const handleResetClick = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setShowReset(false);
    setShowNotification(true);
  };

  return (
    <div>
      <Description />
      <Options
        onGoodClick={handleGoodClick}
        onNeutralClick={handleNeutralClick}
        onBadClick={handleBadClick}
      />

      {reset && <button onClick={handleResetClick}>Reset</button>}
      {showNotification ? (
        <Notification />
      ) : (
        <Feedback good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
}
