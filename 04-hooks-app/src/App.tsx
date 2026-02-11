import { Suspense } from 'react';
import { ClientInformation } from './08-use-suspense/ClientInformation';
import './App.css';
import { Toaster } from 'sonner';
import { getUserAction } from './08-use-suspense/get-user.action';

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
      <Suspense fallback={'loading...'}>
        <ClientInformation getUser={getUserAction(1)} />
      </Suspense>
    </article>
  );
}

export default App;
