import React, { useState, useEffect } from 'react';

function CountdownTimer({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      <div className="timer">
        {timeLeft === 0 ? (
          <div className="time-up">Time is up!</div>
        ) : (
          <div className="time-left">{timeLeft} seconds left</div>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;
