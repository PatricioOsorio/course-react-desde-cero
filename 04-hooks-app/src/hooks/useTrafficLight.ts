import { useEffect, useState } from 'react';
import { cn } from '../utils';

export type Colors = 'red' | 'yellow' | 'green';

const colors: Record<Colors, string> = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

const INITIAL_COUNT = 5;

export const useTrafficLight = () => {
  const [light, setLight] = useState<Colors>('red');
  const [countDown, setCountDown] = useState(INITIAL_COUNT);

  const percentageWidth = (countDown / INITIAL_COUNT) * 100 + '%';

  const getTrafficLightClass = (color: Colors) => {
    return cn('w-32 h-32 rounded-full', light === color ? colors[color] : 'bg-gray-800');
  };

  useEffect(() => {
    if (countDown === 0) return;

    const id = setInterval(() => {
      setCountDown((c) => c - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [countDown]);

  useEffect(() => {
    if (countDown > 0) return;

    if (light === 'red') {
      setLight('green');
      setCountDown(5);
      return;
    }
    if (light === 'green') {
      setLight('yellow');
      setCountDown(2);
      return;
    }
    if (light === 'yellow') {
      setLight('red');
      setCountDown(5);
      return;
    }
  }, [countDown, light]);

  return {
    // Props
    countDown,

    // Computed
    percentageWidth,

    // Methods
    getTrafficLightClass,
  };
};
