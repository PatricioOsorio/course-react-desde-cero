import './App.css';
import { Toaster } from 'sonner';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

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
      {/* <Suspense fallback={'loading...'}>
        <ClientInformation getUser={getUserAction(1)} />
      </Suspense> */}
      <ProfessionalApp />
    </article>
  );
}

export default App;
