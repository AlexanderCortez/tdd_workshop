import React, { useState } from 'react';

const Counter = (): React.ReactElement => {
  const [count, setCount] = useState(0);

  const universalHandler = (increment = true): void => {
    let newCount = count;
    if (increment) {
      newCount += 1;
    }
    if (!increment && newCount > 0) {
      newCount -= 1;
    }
    setCount(newCount);
  };

  return (
    <div className="counter__wrapper">
      <span className="counter__heading">{count}</span>
      <button
        onClick={(): void => universalHandler(false)}
        className="counter__button decrement"
      >
        Decrement
      </button>
      <button
        onClick={(): void => universalHandler()}
        type="button"
        className="counter__button"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
