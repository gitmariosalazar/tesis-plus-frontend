import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app/App';
import { CookiesProvider } from 'react-cookie';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
