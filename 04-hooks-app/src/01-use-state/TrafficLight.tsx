import { useState } from 'react';
import { cn } from '../utils';

type Colors = 'red' | 'yellow' | 'green';

const colors: Record<Colors, string> = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

export const TrafficLight = () => {
  const [light, setLight] = useState<Colors>('red');

  const getTrafficLightClass = (color: Colors) => {
    return cn('w-32 h-32 rounded-full', light === color ? colors[color] : 'bg-gray-800');
  };

  const handleChangeLight = (color: Colors) => {
    setLight(color);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <section className="flex flex-col items-center space-y-8">
        <div className={getTrafficLightClass('red')}></div>
        <div className={getTrafficLightClass('yellow')}></div>
        <div className={getTrafficLightClass('green')}></div>

        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleChangeLight('red')}
          >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleChangeLight('yellow')}
          >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleChangeLight('green')}
          >
            Verde
          </button>
        </div>
      </section>
    </section>
  );
};
