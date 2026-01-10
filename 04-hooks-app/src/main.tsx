import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TrafficLightWithHook } from './02-use-effect/TrafficLightWithHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    <TrafficLightWithHook />
  </StrictMode>
);
