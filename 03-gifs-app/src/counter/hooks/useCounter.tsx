import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => setCounter((c) => c + 1);
  const handleReset = () => setCounter(initialValue);
  const handleSubtract = () => setCounter((c) => c - 1);

  return {
    counter,
    handleAdd,
    handleReset,
    handleSubtract,
  };
};
