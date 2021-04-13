import React, { useState } from 'react';

const Counter = (): React.ReactElement => {
  const [count, setCount] = useState(0);

  const onChange = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="counter__wrapper">
      <span className="counter__heading">{count}</span>
      <button onClick={onChange} type="button" className="counter__button">
        Increment
      </button>
    </div>
  );
};

export default Counter;
