import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <style>{`
        button {
          margin: 0 10px;
        }
        p {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Counter;
