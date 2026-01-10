import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  const decrement = () => {
    if (counter <= 1) return;
    setCounter((c) => c - 1);
  };

  return {
    // Properties
    counter,

    // Methods
    increment,
    decrement,
  };
};
