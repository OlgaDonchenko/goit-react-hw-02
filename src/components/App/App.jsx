import { useState, useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification ";

export default function App() {
  const [feedback, setFeetback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem("saved-feedback")
    );
    if (savedFeedback) {
      setFeetback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const handleFeedback = (type) => {
    setFeetback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleResetClick = () => {
    setFeetback({ good: 0, neutral: 0, bad: 0 });
    window.localStorage.removeItem("saved-feedback");
  };

  return (
    <div>
      <Description />
      <Options
        onGoodClick={() => handleFeedback("good")}
        onNeutralClick={() => handleFeedback("neutral")}
        onBadClick={() => handleFeedback("bad")}
      />
      {totalFeedback > 0 && <button onClick={handleResetClick}>Reset</button>}
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
