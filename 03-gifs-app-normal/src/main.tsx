import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifsApp } from './GifsApp.tsx';
import './main.css';
import { Counter } from './counter/components/Counter/Counter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
    <Counter />
  </StrictMode>
);
