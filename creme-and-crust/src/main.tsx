import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import AuthProvider from './context/AuthProvider.tsx';
import LikedProvider from './context/LikedProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LikedProvider>
          <App />
        </LikedProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
