import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TrafficLightWithEffect } from './02-use-effect/TrafficLightWithEffect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TrafficLight /> */}
    <TrafficLightWithEffect />
  </StrictMode>
);
