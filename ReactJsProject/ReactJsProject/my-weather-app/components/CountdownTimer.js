import React, { useState, useEffect } from 'react';

function CountdownTimer({ duration }) {
  const [remainingSeconds, setRemainingSeconds] = useState(duration);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const intervalId = setInterval(() => {
        setRemainingSeconds(prev => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [remainingSeconds]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
}

export default CountdownTimer;
