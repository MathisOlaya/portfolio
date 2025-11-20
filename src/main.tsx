import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Provider
import { AppManagerProvider } from './managers/AppManager';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppManagerProvider>
      <App />
    </AppManagerProvider>
  </StrictMode>,
);
