import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="followers-app">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
