import { useTrafficLight } from '../hooks/useTrafficLight';

export const TrafficLightWithHook = () => {
  const {
    // Props
    countDown,
    // Computed
    percentageWidth,
    // Methods
    getTrafficLightClass,
  } = useTrafficLight();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <section className="flex flex-col items-center space-y-8">
        <h1 className="text-center- text-white text-2xl">Traffict light with effect</h1>
        <h2 className="text-center- text-white text-xl">{countDown}</h2>

        <div className="w-64 bg-green-50 rounded-full h-2">
          <div
            // style={{ width: `${(countDown / INITIAL_COUNT) * 100}%` }}
            style={{ width: percentageWidth }}
          ></div>
        </div>

        <div className={getTrafficLightClass('red')}></div>
        <div className={getTrafficLightClass('yellow')}></div>
        <div className={getTrafficLightClass('green')}></div>
      </section>
    </section>
  );
};
