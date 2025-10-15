import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { TrafficLight } from './01-use-state/TrafficLight.tsx';

// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <TrafficLight />
  </StrictMode>
);
