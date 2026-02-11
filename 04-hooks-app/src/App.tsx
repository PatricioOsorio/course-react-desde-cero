import { ClientInformation } from './08-use-suspense/ClientInformation';
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
      {/* <InstagramApp /> */}
      <ClientInformation id={1} />
    </article>
  );
}

export default App;
