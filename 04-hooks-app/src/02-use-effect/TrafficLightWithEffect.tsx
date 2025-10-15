import { useEffect, useState } from 'react';
import { cn } from '../utils';

export type Colors = 'red' | 'yellow' | 'green';

const colors: Record<Colors, string> = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

export const TrafficLightWithEffect = () => {
  const [light, setLight] = useState<Colors>('red');
  const [countDown, setCountDown] = useState(5);

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

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <section className="flex flex-col items-center space-y-8">
        <h1 className="text-center- text-white text-2xl">Traffict light with effect</h1>
        <h2 className="text-center- text-white text-xl">{countDown}</h2>

        <div className={getTrafficLightClass('red')}></div>
        <div className={getTrafficLightClass('yellow')}></div>
        <div className={getTrafficLightClass('green')}></div>
      </section>
    </section>
  );
};
