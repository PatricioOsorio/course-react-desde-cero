import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
  console.time('[STUFF]: Init');

  for (let i = 0; i < iterationNumber; i++) {
    console.log('Lets go...');
  }

  console.timeEnd('[STUFF]: Started');

  return `${iterationNumber} iterations`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(10_000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  const heavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <article className="flex flex-col gap-4 items-center">
      <h1>Memo - useMemo</h1>

      <h2>HeavyValue: {heavyValue}</h2>

      <h4>Counter: {counter}</h4>
      <h4>Counter2: {counter2}</h4>

      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1 - Counter2</button>
    </article>
  );
};
