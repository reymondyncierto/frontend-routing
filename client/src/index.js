import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactRouter } from './reactRouter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactRouter />
    </BrowserRouter>
  </React.StrictMode>
);