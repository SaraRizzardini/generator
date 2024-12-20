import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { drawText, getTextHeight } from 'canvas-txt';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@patternfly/patternfly/patternfly.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/worker.js')
      .then(registration => {
        console.log('ServiceWorker registered: ', registration);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}


reportWebVitals();
