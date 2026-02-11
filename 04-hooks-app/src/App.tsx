import { InstagramApp } from './07-useOptimistic/InstragramApp';
import './App.css';
import { Toaster } from 'sonner';

function App() {
  return (
    <article className="bg-dark">
      <Toaster />
      {/* <TrafficLight /> */}
      {/* <TrafficLightWithEffect /> */}
      {/* <TrafficLightWithHook /> */}
      {/* <PokemonPage /> */}
      {/* <FocusScreen /> */}
      {/* <TasksApp /> */}
      {/* <ScrambleWords /> */}
      {/* <MemoHook /> */}
      {/* <MemoCounter /> */}
      <InstagramApp />
    </article>
  );
}

export default App;
