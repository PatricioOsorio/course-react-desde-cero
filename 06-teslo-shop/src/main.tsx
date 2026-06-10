import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styleguide/theme-provider';
import App from './App.tsx';
import './styles/app.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="vercel-dark">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
